const axios = require("axios");
const fs = require("fs");
const { PDFNet } = require("@pdftron/pdfnet-node");

export async function convertToPdf(filename: string) {
  try {
    await PDFNet.initialize(process.env.PDFTRON_KEY);

    const pdfdoc = await PDFNet.Convert.officeToPdfWithPath(`templates/etc/${filename}.docx`);
    await pdfdoc.save(`templates/etc/${filename}.pdf`, PDFNet.SDFDoc.SaveOptions.e_linearized);

    const pdfres = fs.readFileSync(`templates/etc/${filename}.pdf`);

    fs.unlinkSync(`templates/etc/${filename}.docx`);

    return pdfres;
  } catch (error) {
    console.error("Error al convertir a PDF:", error);
  }
}
