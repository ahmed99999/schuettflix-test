import { PrismaClient } from "@prisma/client";
import { CreateTrucksType, GetTrucksType } from "../validator";
const prisma = new PrismaClient();

const getTrucksByLatLng = async (latitude: number, longitude: number) => {
  return await prisma.$queryRaw`
      SELECT id, model, latitude, longitude
      FROM trucks 
      WHERE ST_Distance(
        ST_MakePoint(longitude,latitude)::geography,
        ST_MakePoint(${longitude},${latitude})::geography) <= 400;
    `;
};

const getTrucks = async ({ lat, lon }: GetTrucksType) => {
  if (lat && lon) {
    return await getTrucksByLatLng(lat, lon);
  }

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

const createTruck = async (truck: CreateTrucksType) => {
  return prisma.trucks.create({ data: truck });
};

export default { getTrucks, getTruckById, createTruck };
