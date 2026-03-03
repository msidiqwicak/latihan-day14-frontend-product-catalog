import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { PawPrint } from "lucide-react"

export const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <Card className="w-full max-w-md shadow-lg border-0 bg-amber-50">
        
       
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-[#6ea2b5] rounded-xl flex items-center justify-center text-white">
              <PawPrint size={24} />
            </div>
          </div>

          <CardTitle className="text-2xl font-bold">
            Create PetCare Account
          </CardTitle>

          <CardDescription>
            Join us and manage your pet care easily 🐾
          </CardDescription>
        </CardHeader>

       
        <CardContent>
          <form>
            <div className="flex flex-col gap-5">

              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>

            </div>
          </form>
        </CardContent>

      
        <CardFooter className="flex flex-col gap-3">
          <Button className="w-full bg-[#6ea2b5] hover:bg-[#5b8fa1]">
            Create Account
          </Button>

          <Button variant="outline" className="w-full">
            Sign up with Google
          </Button>

          <p className="text-xs text-center text-slate-500 mt-2">
            Already have an account? 
            <span className="text-[#6ea2b5] cursor-pointer hover:underline ml-1">
              Login
            </span>
          </p>
        </CardFooter>

      </Card>
    </div>
  )
}