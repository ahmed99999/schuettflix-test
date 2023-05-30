import { PrismaClient } from "@prisma/client";
import { TrucksType } from "../validator";
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

const createTruck = async (truck: TrucksType) => {
  return prisma.trucks.create({ data: truck });
};

export default { getTrucks, getTruckById, createTruck };
