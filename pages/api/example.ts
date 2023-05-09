import type { NextApiRequest, NextApiResponse } from "next";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import fs from "fs";
import path from "path";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Load the docx file as binary content
    const content = fs.readFileSync(path.join(process.cwd(), "pages/api/input.docx"), "binary");
    const zip = new PizZip(content);

    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    doc.setData({
      nombre: "John",
      edad: "Doe",
    });

    doc.render();

    const buf = doc.getZip().generate({
      type: "nodebuffer",
      compression: "DEFLATE",
    });

    fs.writeFileSync(path.join(process.cwd(), "pages/api/output.docx"), buf);

    // Load the generated docx file as binary content
    const data = fs.readFileSync(path.join(process.cwd(), "pages/api/output.docx"));

    // Set headers and send the DOCX file as the response
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
    res.setHeader("Content-Disposition", "attachment; filename=Archivo.docx");
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  } finally {
    // Delete the generated file from the public directory
    fs.unlinkSync(path.join(process.cwd(), "pages/api/output.docx"));
  }
}
