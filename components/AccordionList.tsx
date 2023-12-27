"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionList() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is an event?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem
          eros, pulvinar non justo et, accumsan efficitur enim. Nullam cursus
          nisl eros, eget dignissim mauris condimentum non. Nam eu augue libero.
          Sed eu cursus ante. Etiam ultricies at quam a pellentesque. Donec sit
          amet velit vitae nulla sagittis mattis eu in urna.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What is an event?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem
          eros, pulvinar non justo et, accumsan efficitur enim. Nullam cursus
          nisl eros, eget dignissim mauris condimentum non. Nam eu augue libero.
          Sed eu cursus ante. Etiam ultricies at quam a pellentesque. Donec sit
          amet velit vitae nulla sagittis mattis eu in urna.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What is an event?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem
          eros, pulvinar non justo et, accumsan efficitur enim. Nullam cursus
          nisl eros, eget dignissim mauris condimentum non. Nam eu augue libero.
          Sed eu cursus ante. Etiam ultricies at quam a pellentesque. Donec sit
          amet velit vitae nulla sagittis mattis eu in urna.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>What is an event?</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem
          eros, pulvinar non justo et, accumsan efficitur enim. Nullam cursus
          nisl eros, eget dignissim mauris condimentum non. Nam eu augue libero.
          Sed eu cursus ante. Etiam ultricies at quam a pellentesque. Donec sit
          amet velit vitae nulla sagittis mattis eu in urna.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
