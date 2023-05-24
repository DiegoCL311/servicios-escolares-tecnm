import type { NextApiRequest, NextApiResponse } from "next";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import fs from "fs/promises";
import path from "path";
import { convertToPdf } from "../utils/toPDF";
import { convertToPdfLibre } from "../utils/toPDFLibre";
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set headers
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=Constancia.pdf");
  const filename = Date.now().toString();

  try {
    // Load the docx file as binary content
    const content = await fs.readFile(path.join(serverRuntimeConfig.PROJECT_ROOT, "templates/ConstanciaEstudioTemplate.docx"), "binary");
    const zip = new PizZip(content);

    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    const docxData = {
      nombreAlumno: "Foo Bar Baz Qux",
      numSemestre: 10,
      turno: "Matutino",
      numControl: "12345678",
      fechaInicioSem: "30 de Enero del 2023",
      fechaFinSem: "12 de Junio del 2023",
      carreraAlumno: "Ingeniería en Sistemas Computacionales",
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

    await fs.writeFile(`./tmp/${filename}.docx`, buffer);
    const pdfbuff = await convertToPdf(filename);

    //send the PDF file as the response
    res.send(pdfbuff);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  } finally {
    //Delete the generated file from the public directory if using PDFTron / Apryse version
    await fs.unlink(path.join(serverRuntimeConfig.PROJECT_ROOT, `./tmp/${filename}.docx`));
  }
}
