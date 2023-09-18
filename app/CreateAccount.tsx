"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

export default function DemoCreateAccount() {
    const { toast } = useToast();
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: any) => {
        toast({
            title: "Sign in with the account",
            description: `Email: ${data.email}, Password: ${data.password}`,
        });
    };

    return (
        <Card className="max-w-md mx-auto">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Create an account</CardTitle>
                <CardDescription>
                    Enter your email below to create your account
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="grid gap-4">
                    <div className="grid grid-cols-2 gap-6">
                        <Button variant="outline">
                            Github
                        </Button>
                        <Button variant="outline">
                            Google
                        </Button>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input {...field} type="email" placeholder="m@example.com" />}
                        />
                        {errors.email && <span>Email is invalid.</span>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input {...field} type="password" />}
                        />
                        {errors.password && <span>Password must be at least 8 characters.</span>}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" type="submit">
                        Sign in
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}


// "use client";
// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button"
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
//   } from "@/components/ui/card"  
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { ToastAction } from "@/components/ui/toast"
// import { useToast } from "@/components/ui/use-toast"

  
// export default function DemoCreateAccount() {
//   const { toast } = useToast()
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <Card className="max-w-md mx-auto">
//       <CardHeader className="space-y-1">
//         <CardTitle className="text-2xl">Create an account</CardTitle>
//         <CardDescription>
//           Enter your email below to create your account
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="grid gap-4">
//         <div className="grid grid-cols-2 gap-6">
//           <Button variant="outline">
//             Github
//           </Button>
//           <Button variant="outline">
//             Google
//           </Button>
//         </div>
//         <div className="relative">
//           <div className="absolute inset-0 flex items-center">
//             <span className="w-full border-t" />
//           </div>
//           <div className="relative flex justify-center text-xs uppercase">
//             <span className="bg-background px-2 text-muted-foreground">
//               Or continue with
//             </span>
//           </div>
//         </div>
//         <div className="grid gap-2">
//           <Label htmlFor="email">Email</Label>
//           <Input 
//           id="email" 
//           type="email" 
//           placeholder="m@example.com" 
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}/>
//         </div>
//         <div className="grid gap-2">
//           <Label htmlFor="password">Password</Label>
//           <Input 
//           id="password" 
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)} />
//         </div>
//       </CardContent>
//       <CardFooter>
//       <Button className="w-full"
//           onClick={() => {
//             toast({
//               title: "Sign in with the account",
//               description: `Email: ${email}, Password: ${password}`,
//             });
//           }}
//         >
//         sign in
//         </Button>
//       </CardFooter>
//     </Card>
//   )
// }

