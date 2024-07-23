"use client"

import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { db } from "@/db";
import { deleteBlock, editBlock } from "@/app/actions";
import { CodeEditor } from "@/components/CodeEditor"

export default async function ViewBlockPage({params}: any) {
  const block = await db.block.findUnique({ 
    where: {id: Number(params.id) }
  });
  
  return (
  <form>
    <Card >
      <CardHeader>
        <div className="flex items-center justify-between">
          <label className="text-2xl font-bold w-24" htmlFor="title">
            Title:
          </label>
          <Input defaultValue={block?.title} type="text"
            name="title"
            id="title" className="text-2xl"/>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <label className="text-2xl font-bold w-24" htmlFor="code">
            Code:
          </label>
          <Input defaultValue={block?.code} type="text"     id="code"
            name="code" className="text-base rounded-md border" />
        </div>
        <input type="hidden"
            name="id" value={block?.id}/>
        <div>
          <CodeEditor />
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Button formAction={deleteBlock} type="submit" variant="outline">Delete</Button>
        <Button formAction={editBlock} type="submit">Update</Button>
      </CardFooter>
    </Card>
  </form>
  )
}