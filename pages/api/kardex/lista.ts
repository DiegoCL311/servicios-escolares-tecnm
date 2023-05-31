import type { NextApiRequest, NextApiResponse } from "next";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { promises as fs } from "fs";
import path from "path";
import { convertToPdf } from "../utils/toPDF";
import { convertToPdfLibre } from "../utils/toPDFLibre";
import serverAuth from "@/lib/server-auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set headers
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=Constancia.pdf");
  const filename = Date.now().toString();
  const { acc: user } = await serverAuth(req, res);

  try {
    // Load the docx file as binary content
    const content = await fs.readFile((process.env.NODE_ENV === "production" ? "" : "public") + "/templates/kardexListaTemplate.docx", "binary");
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

    //get data from reticulas, materias, cursos, using prisma , // ID de la carrera del alumno
    const reticulas = await prismadb.reticula.findMany({
      where: {
        carreraid: estudianteInfo.Estudiante.Carrera.id,
      },
    });

    var reticulaArray: Object[] = [];
    for (const item of reticulas) {
      const materias: Object[] = [];

      const materiasArr = await prismadb.materia.findMany({
        where: {
          id: {
            in: item.materias,
          },
        },
        include: {
          Cursos: {
            where: {
              estudianteId: estudianteInfo.Estudiante.id,
            },
          },
        },
      });

      for (const materia of materiasArr) {
        const objmateria = {
          nombre: materia.nombre,
          calificacion: materia.Cursos[0]?.calificacion || "N/A",
          semCursada: materia.Cursos[0]?.semCursada || "N/A",
        };
        materias.push(objmateria);
      }

      const objsemestre = {
        semestre: item.semestre,
        materias: materias,
      };

      reticulaArray.push(objsemestre);
    }

    const docxData = {
      reticulaArray,
      numControl: estudianteInfo.Estudiante.numeroControl,
      nombreAlumno:
        estudianteInfo.Estudiante.nombres + " " + estudianteInfo.Estudiante.apellidoPaterno + " " + estudianteInfo.Estudiante.apellidoMaterno,
      carreraAlumno: estudianteInfo.Estudiante.Carrera.nombre,
      numSemestre: estudianteInfo.Estudiante.semestre,
      turno: "Matutino",
      //fecha actual en formato YYYY-MM-DD
      fecha:
        new Date().getFullYear().toString() +
        "-" +
        (new Date().getMonth() + 1).toString().padStart(2, "0") +
        "-" +
        new Date().getDate().toString().padStart(2, "0"),
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
