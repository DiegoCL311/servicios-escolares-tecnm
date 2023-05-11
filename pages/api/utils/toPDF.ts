const axios = require("axios");
const fs = require("fs");
const { PDFNet } = require("@pdftron/pdfnet-node");

export async function convertToPdf(filename: string) {
  try {
    await PDFNet.initialize(process.env.PDFTRON_KEY);

    const pdfdoc = await PDFNet.Convert.officeToPdfWithPath(`templates/etc/${filename}.docx`);
    const docBuffer = await pdfdoc.saveMemoryBuffer(PDFNet.SDFDoc.SaveOptions.e_linearized);
    const buffer = Buffer.from(docBuffer.buffer, docBuffer.byteOffset, docBuffer.byteLength);

    return buffer;
  } catch (error) {
    console.error("Error al convertir a PDF:", error);
  } 
}
