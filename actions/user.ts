"use server";
import { getUserSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

// get user by session
const getUser = async () => {
  const session = await getUserSession();
  return await db.user.findUnique({
    where: { id: session?.id },
  });
};

// update user details
const updateUser = async (data: any) => {
  const { id } = (await getUserSession()) as { id: string };
  const user = await db.user.update({
    where: { id },
    data,
  });
  revalidatePath("/profile");
  return { msg: "User Details Successfully!", data: user };
};

export { getUser, updateUser };
