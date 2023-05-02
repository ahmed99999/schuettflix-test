import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const getTrucks = async () => {
  return await prisma.trucks.findMany();
};

export { getTrucks };
