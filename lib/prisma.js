const { PrismaClient } = require("@/app/generated/prisma");

const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

export default prisma;
