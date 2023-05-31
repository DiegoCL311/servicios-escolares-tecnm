import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import prismadb from "@/lib/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.email) throw new Error("Not signed in");

  const acc = await prismadb.cuenta.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!acc) throw new Error("User not found");

  return { acc };
};

export default serverAuth;
