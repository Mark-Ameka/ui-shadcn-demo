"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function TabsListEvent() {
  return (
    <Tabs defaultValue="services" className="md:w-[420px] w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="services">Services</TabsTrigger>
        <TabsTrigger value="visibility">Visibility</TabsTrigger>
      </TabsList>
      <TabsContent value="services">
        <Card>
          <CardHeader>
            <CardTitle>Services</CardTitle>
            <CardDescription>
              Aenean vitae enim volutpat, efficitur mauris sed, auctor ex. Duis
              at tempus lorem. Sed lacus sapien, fermentum sed suscipit eu,
              consectetur non mi.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2"></CardContent>
          <CardFooter>
            <Dialog>
              <DialogTrigger className="w-full">
                <Button className="w-full">View Services</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="visibility">
        <Card>
          <CardHeader>
            <CardTitle>Visibility</CardTitle>
            <CardDescription>
              Donec ac orci quis sapien vulputate pellentesque eu eu dui. Donec
              ultrices lobortis orci. Duis arcu ipsum, molestie vitae odio
              vitae, vulputate lobortis eros. In placerat quis urna ut
              convallis. Mauris facilisis urna eget lectus viverra, vel
              vulputate mauris fermentum.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2"></CardContent>
          <CardFooter>
            <Dialog>
              <DialogTrigger className="w-full">
                <Button className="w-full">View Visibilities</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
