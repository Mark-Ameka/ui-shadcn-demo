"use client";
import * as React from "react";
import { Calendar } from "./ui/calendar";
import Tables from "./Tables";
import AccordionList from "./AccordionList";
import TabsListEvent from "./TabsListEvent";
import { Button } from "./ui/button";
import CardView from "./CardView";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Content() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="my-20">
      <div className="sm:my-40 my-0">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] ">
          <span className="mx-4 px-3 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#6528C8] relative inline-block">
            <span className="relative text-white">Event</span>
          </span>
          Management System
        </h1>
        <p className="mt-16 indent-10 text-center text-md font-light">
          Welcome to our Event Management System, where seamless organization
          meets unforgettable experiences! Our platform is designed to
          effortlessly plan and execute your events, whether it&apos;s a
          corporate conference, wedding celebration, or a special milestone.
          With user-friendly features, you can easily create and customize
          events, manage guest lists, send invitations, and track RSVPs. Our
          system streamlines the entire event planning process, saving you time
          and ensuring every detail is perfect.
        </p>
        <div className="flex justify-center items-center my-5">
          <Button variant="secondary" size="lg">
            Get Started
          </Button>
        </div>
      </div>

      <div className="mb-10">
        <h1
          className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Elevate your events with our comprehensive Event Management System{" "}
          <span>-</span> where precision meets passion!
        </h1>
      </div>
      <div className="flex-row md:flex gap-2 space-y-5 md:space-y-0">
        <ScrollArea
          className="h-auto w-full"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <Tables />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <div className="flex justify-center items-center">
          <Calendar
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="200"
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow"
          />
        </div>
      </div>
      <div className="my-44">
        <h1
          className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] mb-10"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Tailor your event pages to match your unique style effortlessly.
        </h1>
        <div className="flex-row md:flex gap-4 space-y-5 md:space-y-0 items-center">
          <div className="flex-1" data-aos="fade-right" data-aos-duration="500">
            <AccordionList />
          </div>
          <div data-aos="fade-left" data-aos-duration="500">
            <TabsListEvent />
          </div>
        </div>
      </div>
      <div className="my-5">
        <h1
          className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Introducing our state-of-the-art Event Management System - where every
          detail meets perfection!
        </h1>
      </div>
      <CardView />
    </div>
  );
}
