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

const getTruckById = async (truckId: number) => {
  return prisma.trucks.findUnique({
    where: {
      id: truckId,
    },
  });
};

export default { getTrucks, getTruckById };
