import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { login } from "@/app/actions";

export default function LoginPage({searchParams}: any) {
  const errormsg = searchParams?.error ? <p className="bg-red-200 p-2 rounded-md">Invalid username or password</p> : "Enter your email and password to access your account."

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md p-6 md:p-8">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription>{errormsg}</CardDescription>
        </CardHeader>
        <form>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Email</Label>
            <Input id="username" type="text" name="username" placeholder="Enter email" required />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password" type="password" name="password" placeholder="Enter password" required />
          </div>
        </CardContent>
        <CardFooter>
        <Button formAction={login} type="submit">Sign in</Button>
        </CardFooter>
        </form>
      </Card>
    </div>
    </>
  )
}