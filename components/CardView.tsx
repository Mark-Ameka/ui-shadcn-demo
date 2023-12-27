"use client";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardView() {
  return (
    <div className="flex-row md:flex gap-4 space-y-5 md:space-y-0 my-10 items-center">
      <Card>
        <CardHeader>
          <CardTitle>Lorem Ipsum</CardTitle>
          <CardDescription>
            Aenean vitae enim volutpat, efficitur mauris sed, auctor ex. Duis at
            tempus lorem. Sed lacus sapien, fermentum sed suscipit eu,
            consectetur non mi.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2"></CardContent>
        <CardFooter>
          <Button className="w-full">Save Lorem</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Lorem Ipsum</CardTitle>
          <CardDescription>
            Aenean vitae enim volutpat, efficitur mauris sed, auctor ex. Duis at
            tempus lorem. Sed lacus sapien, fermentum sed suscipit eu,
            consectetur non mi.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2"></CardContent>
        <CardFooter>
          <Button className="w-full">Save Lorem</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Lorem Ipsum</CardTitle>
          <CardDescription>
            Aenean vitae enim volutpat, efficitur mauris sed, auctor ex. Duis at
            tempus lorem. Sed lacus sapien, fermentum sed suscipit eu,
            consectetur non mi.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2"></CardContent>
        <CardFooter>
          <Button className="w-full">Save Lorem</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
