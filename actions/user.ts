"use server";
import { getUserSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

// update user details
const updateUser = async (data: any) => {
  const { id } = (await getUserSession()) as { id: string };
  const user = await db.user.update({
    where: { id },
    data,
  });
  revalidatePath("/profile");
  return { msg: "اطلاعات کاربری ویرایش شد!", data: user };
};

export { updateUser };
