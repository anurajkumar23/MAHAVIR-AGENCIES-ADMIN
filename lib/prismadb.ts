import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

let prismadb: PrismaClient;

if (process.env.NODE_ENV !== "production") {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();
  }
  prismadb = globalThis.prisma;
} else {
  prismadb = new PrismaClient();
}

export default prismadb;
