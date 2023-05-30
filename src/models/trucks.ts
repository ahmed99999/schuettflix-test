import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getTrucks = async () => {
  return prisma.trucks.findMany({
    select: {
      id: true,
      model: true,
      latitude: true,
      longitude: true,
    },
  });
};

export { getTrucks };
