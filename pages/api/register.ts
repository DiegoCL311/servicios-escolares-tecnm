import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const cuenta = await prismadb.cuenta.findUnique({
      where: {
        email,
      },
    });

    if (cuenta) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPswrd = await bcrypt.hash(password, 12);

    const newAcc = await prismadb.cuenta.create({
      data: {
        email,
        hashedPassword: hashedPswrd,
        emailVerified: new Date(),
      },
    });

    return res.status(200).json(newAcc);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
