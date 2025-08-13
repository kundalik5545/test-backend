import { PrismaClient } from "@/generated/prisma";

const Prisma = new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = Prisma;
}

export default Prisma;
