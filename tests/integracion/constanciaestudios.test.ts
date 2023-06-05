import { NextApiRequest, NextApiResponse } from "next";
import { createMocks } from "node-mocks-http";
import handler from "@/pages/api/constancia/estudios";

jest.mock('next/config', () => () => ({
    serverRuntimeConfig: {
      // Aquí puedes definir las propiedades requeridas para la configuración simulada
      // Por ejemplo, si necesitas definir una propiedad "foo" con el valor "bar":
      // foo: 'bar',
    },
  }));

describe("GenerarConstancia Integration Test", () => {
  it("generates a certificate successfully", async () => {
    // Simula una solicitud HTTP al endpoint de generación de constancias
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>();

    req.method = "GET";
    // Puedes ajustar el objeto 'req' según tus necesidades, por ejemplo, agregar cabeceras o parámetros de consulta
    // req.headers = { ... };
    // req.query = { ... };

    await handler(req, res);

    // Verifica que la respuesta sea exitosa
    expect(res.statusCode).toBe(200);

    // Verifica que se haya establecido el encabezado adecuado para descargar el archivo PDF
    expect(res.getHeader("Content-Type")).toBe("application/pdf");
    expect(res.getHeader("Content-Disposition")).toBe("attachment; filename=Constancia.pdf");

    // Verifica que el cuerpo de la respuesta sea válido (PDF generado)
    // Aquí puedes realizar aserciones adicionales según tu caso específico
    expect(res._getData()).toBeTruthy();
  });
});
