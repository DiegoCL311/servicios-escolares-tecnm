import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/lib/server-auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { acc } = await serverAuth(req, res);
    res.status(200).json(acc);
  } catch (error) {
    res.status(204).send(null);
  }
}
