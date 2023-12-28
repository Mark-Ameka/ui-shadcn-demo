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

const cardDetails = [
  {
    card_title: "Seamless Planning",
    card_desc:
      "Effortlessly create and organize events with a user-friendly interface.",
    card_button: "Save Lorem",
    duration: 500,
  },
  {
    card_title: "Smart Invitations",
    card_desc:
      "Send stylish invites and manage RSVPs in one centralized platform.",
    card_button: "Save Lorem",
    duration: 600,
  },
  {
    card_title: "Responsive Design",
    card_desc:
      "Access your event plans anytime, with our mobile-friendly system.",
    card_button: "Save Lorem",
    duration: 700,
  },
];

export default function CardView() {
  return (
    <div className="flex-row md:flex gap-4 space-y-5 md:space-y-0 my-10 items-center">
      {cardDetails.map((card) => (
        <Card
          key={card.card_title}
          data-aos="fade-up"
          data-aos-duration={card.duration}
        >
          <CardHeader>
            <CardTitle>{card.card_title}</CardTitle>
            <CardDescription>{card.card_desc}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2"></CardContent>
          <CardFooter>
            <Button className="w-full">Save Lorem</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
