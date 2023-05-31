import { render } from "@testing-library/react";
import React from "react";
import KardexLista from "@/pages/kardex/lista";
import { describe, expect, test } from "@jest/globals";
import { NextRouter } from "next/router";

// Mock del objeto NextRouter
const router: Partial<NextRouter> = {
  // Propiedades que necesites para tu prueba
  route: "/ruta-de-prueba",
  pathname: "/ruta-de-prueba",
  query: {},
  asPath: "/ruta-de-prueba",
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
};

jest.mock("next/router", () => ({
  useRouter: () => router,
}));

describe("KardexLista", () => {
  test("renders KardexLista component", () => {
    render(<KardexLista />);
  });
});
