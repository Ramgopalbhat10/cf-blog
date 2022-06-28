import { prisma } from "./db.server";

export const getAllPosts = async () => {
  return prisma.post.findMany();
};
