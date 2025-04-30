import * as React from "react";

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactMe() {

  const [form, setForm] = React.useState({
    name: "", 
    phone: "",
    email: "",
    request: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form, 
      [e.target.id]: e.target.value
    });

    const handleReuestChange = (value:string) => {
      e.preventDefault();
    }

    }
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
        <CardDescription>Fill up the following form</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                placeholder="phone of your project"
                type="number"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="email of your project"
                type="email"
              />
            </div>
            <div className="flex flex-col space-y-1.5 w-full">
              <Label htmlFor="framework">Request</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="marketing">Marketing & Branding</SelectItem>
                  <SelectItem value="research">Market Research</SelectItem>
                  <SelectItem value="video">Commerical Video Editor</SelectItem>
                  <SelectItem value="programing">Software Development</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5 ">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Describe your request"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
       
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
}
