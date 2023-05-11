const axios = require("axios");
const fs = require("fs");
const libre = require("libreoffice-convert");
libre.convertAsync = require("util").promisify(libre.convert);


export async function convertToPdfLibre(docxBuffer: Buffer) {
  try {
    const pdfBuffer = await libre.convertAsync(docxBuffer, ".pdf", undefined);

    return pdfBuffer;
  } catch (error) {
    console.error("Error al convertir a PDF:", error);
  }
}
