"use client";
import * as React from "react";
import { Calendar } from "./ui/calendar";
import Tables from "./Tables";
import AccordionList from "./AccordionList";
import TabsListEvent from "./TabsListEvent";
import CardView from "./CardView";

export default function Content() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="my-20">
      <div className="my-16">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Event Management System
        </h1>
      </div>
      <div className="flex-row md:flex gap-2 space-y-5 md:space-y-0 my-5">
        <Tables />
        <div className="flex justify-center items-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow"
          />
        </div>
      </div>
      <div className="flex-row md:flex gap-4 space-y-5 md:space-y-0 my-10 items-center">
        <div className="flex-1">
          <AccordionList />
        </div>
        <TabsListEvent />
      </div>
      <CardView />
    </div>
  );
}
