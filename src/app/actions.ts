
"use server";
import { db } from "@/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createBlock(formData: FormData) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;
  await db.block.create({ data: { title, code } });
  redirect("/blocks");
}


export async function editBlock(formData: FormData) {
  const id = formData.get("id") as string
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;
  const block = await db.block.update({ 
    where: { id:Number(id) },
    data: { title: title, code: code }
  });
  redirect("/blocks");
}

export async function deleteBlock(formData: FormData) {
  const uniqueid = formData.get("id");
  await db.block.delete({ 
    where: {id: Number(uniqueid)}, 
  });
  redirect("/blocks");
}

// Login actions
export async function login(formData: FormData) {
  try {
    const user = await db.user.findFirstOrThrow({
      where: {
        username: formData.get("username") as string, 
        password: formData.get("password") as string
      }
    });
    cookies().set("user_id", String(user.id));

  } catch (error) {
    redirect("/login?error=Invalid");
  }
  redirect("/blocks");
}