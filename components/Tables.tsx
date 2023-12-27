import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const events = [
  {
    event_date: "December 2, 2023",
    event_name: "Which is which?",
    event_status: "On going",
    handler: "Mark",
  },
  {
    event_date: "December 4, 2023",
    event_name: "The Binding of Vow",
    event_status: "On going",
    handler: "Mark",
  },
  {
    event_date: "December 5, 2023",
    event_name: "Constellations of Stars",
    event_status: "On going",
    handler: "Mark",
  },
  {
    event_date: "December 8, 2023",
    event_name: "Hungry for devestation",
    event_status: "On going",
    handler: "Mark",
  },
  {
    event_date: "December 20, 2023",
    event_name: "Unpaid doubts",
    event_status: "On going",
    handler: "Mark",
  },
  {
    event_date: "December 24, 2023",
    event_name: "Love is a career",
    event_status: "On going",
    handler: "Mark",
  },
];

export default function Tables() {
  return (
    <Table>
      <TableCaption>Join us to get your event kick in!</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Date</TableHead>
          <TableHead>Event Name</TableHead>
          <TableHead>Event Status</TableHead>
          <TableHead className="text-right">Handler</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((event) => (
          <TableRow key={event.event_date} className="truncate">
            <TableCell className="font-medium">{event.event_date}</TableCell>
            <TableCell>{event.event_name}</TableCell>
            <TableCell className="flex gap-2 items-center">
              <span>{event.event_status}</span>
              <span>
                <div className="h-2 w-2 rounded-full bg-[#6225C5]"></div>
              </span>
            </TableCell>
            <TableCell className="text-right">{event.handler}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>There are total of</TableCell>
          <TableCell className="text-right">2,500 Events Running!</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
