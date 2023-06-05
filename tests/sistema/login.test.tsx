import React, { useCallback, useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { login } from "@/lib/utils";
import { useRouter } from "next/router";
import useCurrentUser from "@/hooks/useCurrentUser";
import Login from "@/pages/login";

jest.mock("@/lib/utils", () => ({
  login: jest.fn(),
}));

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/hooks/useCurrentUser", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("@/components/Loading", () => ({
  __esModule: true,
  default: jest.fn(() => <div>Loading...</div>),
}));

describe("Login Component", () => {
  it("allows users to login successfully", async () => {
    const mockRouterPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockRouterPush,
    });

    (useCurrentUser as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
    });

    render(<Login />);

    const emailInput = screen.getByTestId("email-input") as HTMLInputElement;
    const passwordInput = screen.getByTestId("password-input") as HTMLInputElement;

    // Ingresa valores en los campos de entrada
    fireEvent.change(emailInput, { target: { value: "test9@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "1234" } });

    // Obtén los valores de los campos de entrada
    expect(emailInput.value).toBe("test9@test.com");
    expect(passwordInput.value).toBe("1234");
    const loginButton = screen.getByTestId("login-btn") as HTMLInputElement;

    fireEvent.click(loginButton);

    expect(login).toHaveBeenCalledWith("test9@test.com", "1234");
  });
});
