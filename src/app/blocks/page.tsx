import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { db } from "@/db";
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function BlocksPage() {
  const userId = cookies().get("user_id")?.value;
  const blocks = await db.block.findMany();

  if (!userId) {
    redirect("/login");
  }
  const allBlocks = blocks.map( (block) => {
    return(
    <Card>
    <CardHeader>
      <CardTitle>{block.title}</CardTitle>
      <CardDescription>
        {block.code}
      </CardDescription>
    </CardHeader>
    <CardFooter>
      <Link href={`/blocks/${block?.id}`} passHref>
        <Button variant="outline">View Details</Button>
      </Link>
    </CardFooter>
  </Card>
    )
  });

  return (
    <>
    <div className="flex flex-row justify-between m-7">
      <div className="flex"><h3 className=" text-3xl">Your Code Blocks</h3>
      </div>
      
      <Link href={`/blocks/create`}>
        <div className="w-full rounded-lg bg-muted pl-4 pr-4 py-2 text-sm border hover:bg-gray-200">Create New</div>
      </Link>
    </div>
    
    <div className="flex flex-col w-full min-h-screen bg-background">
    <header className="sticky top-0 z-10 flex items-center h-16 px-4 border-b bg-background shadow-sm sm:px-6">
      <div className="relative flex-1">
        <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search database..."
          className="w-full rounded-lg bg-muted pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
    </header>
    <main className="flex-1 p-4 sm:p-6 md:p-8">
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        {allBlocks}
      </div>
    </main>
  </div>
  </>
  );
}