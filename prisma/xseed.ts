import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.user.createMany({
    data: [
      { name: "Pedro", email: "pedro@example.com" },
      { name: "Caroline", email: "caroline@example.com" },
    ],
  });
}

seed().then(() => prisma.$disconnect());
