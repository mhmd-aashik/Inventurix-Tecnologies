import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    title: "What is UX design?",
    content:
      "UX design stands for User Experience design. It is the process of designing digital or physical products that are easy to use, intuitive, and enjoyable for the user.",
  },
  {
    title: "Is it styled?",
    content:
      "Yes. It comes with default styles that matches the other components' aesthetic.",
  },
  {
    title: "Is it animated?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

function AccordionCard() {
  return (
    <Accordion
      type="single"
      collapsible
      className="max-w-4xl my-4 w-full space-y-2"
    >
      {items.map(({ title, content }, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border border-blue-500 rounded-[10px] px-4"
        >
          <AccordionTrigger className="text-left text-[#0076e3] text-xl font-semibold">
            {title}
          </AccordionTrigger>
          <AccordionContent className="text-left text-[18px] font-normal textwhite_textdark">
            ✅ {content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default AccordionCard;
