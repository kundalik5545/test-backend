"use server";

import Prisma from "@/lib/prisma";

export async function createUser() {
  try {
    const newUser = await Prisma.user.create({
      data: {
        name: "Kundalik Jadhav",
        email: "kj@fm.com",
      },
    });

    // const newUser = await Prisma.user.findMany();
    console.log("User created on server - ", newUser);

    return newUser;
  } catch (error) {
    console.error("Error while creating user:", error);
    throw new Error("Error while creating user");
  }
}

export async function getUser() {
  try {
    const allUser = await Prisma.user.findMany();
    return allUser;
  } catch (err) {
    console.log("Error while fetching users", err);
    throw new Error("Error while fetching users", err);
  }
}
