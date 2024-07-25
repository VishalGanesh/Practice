import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const Register = () => {
  return (
    <div className='h-full w-full flex justify-center items-center '>
      <Card className="w-1/4">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl">Join us</CardTitle>
          <CardDescription>
            Create an account to get started
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="roll">Mobile Number</Label>
            <Input id="roll" type="text" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="abc@gmail.com" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="......"/>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full ">Create account</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Register