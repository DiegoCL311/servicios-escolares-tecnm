import type { NextApiRequest, NextApiResponse } from "next";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import fs from "fs";
import fspromises from "fs/promises";
import path from "path";
const libre = require("libreoffice-convert");
libre.convertAsync = require("util").promisify(libre.convert);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

    const filename = Date.now().toString();
    // Load the docx file as binary content
    const content = fs.readFileSync(path.join(process.cwd(), "templates/ConstanciaEstudioTemplate.docx"), "binary");
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

    const buf = doc.getZip().generate({
      type: "nodebuffer",
      compression: "DEFLATE",
    });

    fs.writeFileSync(path.join(process.cwd(), `templates/etc/${filename}.docx`), buf);

    // Read file
    const docxBuf = await fspromises.readFile(path.join(process.cwd(), `templates/etc/${filename}.docx`));

    // Convert it to pdf format with undefined filter (see Libreoffice docs about filter)
    let pdfBuf = await libre.convertAsync(docxBuf, ".pdf", undefined);

    await fspromises.writeFile(path.join(process.cwd(), `templates/etc/${filename}.pdf`), pdfBuf);


    // Read PDF file
    const PDFdata =fs.readFileSync(path.join(process.cwd(), `templates/etc/${filename}.pdf`));

    // Set headers and send the PDF file as the response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=Constancia.pdf');
    res.send(PDFdata);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  } finally {
    // Delete the generated file from the public directory
    fs.unlinkSync(path.join(process.cwd(), "templates/etc/output.docx"));
    fs.unlinkSync(path.join(process.cwd(), "templates/etc/output.pdf"));
  }
}
