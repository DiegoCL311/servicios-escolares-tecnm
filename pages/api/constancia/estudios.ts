import type { NextApiRequest, NextApiResponse } from "next";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { promises as fs } from "fs";
import path from "path";
import { convertToPdf } from "../utils/toPDF";
import { convertToPdfLibre } from "../utils/toPDFLibre";
import serverAuth from "@/lib/server-auth";
import prismadb from "@/lib/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set headers
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=Constancia.pdf");
  const filename = Date.now().toString();
  const { acc: user } = await serverAuth(req, res);
  console.log("req",req);
  

  try {
    // Load the docx file as binary content
    const content = await fs.readFile(
      (process.env.NODE_ENV === "production" ? "" : "public") + "/templates/ConstanciaEstudioTemplate.docx",
      "binary"
    );
    const zip = new PizZip(content);

    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    //get data from user using prisma
    const estudianteInfo = await prismadb.cuenta.findUnique({
      where: {
        email: user.email,
      },
      include: {
        Estudiante: {
          include: {
            Carrera: true,
          },
        },
      },
    });

    console.log("acc", estudianteInfo);

    const docxData = {
      nombreAlumno:
        estudianteInfo.Estudiante.nombres + " " + estudianteInfo.Estudiante.apellidoPaterno + " " + estudianteInfo.Estudiante.apellidoMaterno,
      numSemestre: estudianteInfo.Estudiante.semestre,
      turno: "Matutino",
      numControl: estudianteInfo.Estudiante.numeroControl,
      fechaInicioSem: "30 de Enero del 2023",
      fechaFinSem: "12 de Junio del 2023",
      carreraAlumno: estudianteInfo.Estudiante.Carrera.nombre,
      //fecha actual en formato texto español
      fechaActual:
        new Date().getDate() + " de " + new Date().toLocaleString("es-MX", { month: "long" }) + " del " + new Date().getFullYear().toString(),
    };

    doc.setData(docxData);
    doc.render();

    const buffer = doc.getZip().generate({
      type: "nodebuffer",
      compression: "STORE",
    });

    //Libre version
    //const pdfbuff = await convertToPdfLibre(buffer);

    //PDFTron / Apryse version
    const outputPath = path.join("tmp", `${filename}.docx`);
    await fs.writeFile(outputPath, buffer);

    const pdfbuff = await convertToPdf(filename);

    //send the PDF file as the response
    res.send(pdfbuff);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  } finally {
    //Delete the generated file from the public directory if using PDFTron / Apryse version
    await fs.unlink(path.join("tmp", `${filename}.docx`));
  }
}
