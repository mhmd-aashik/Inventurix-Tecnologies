import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const ScheduleBtn = () => {
  return (
    <Button
      className="!bg-blue-500 hover:!bg-blue-600 font-bold !text-white rounded-full"
      variant="default"
    >
      Schedule a Meet <ArrowRight />
    </Button>
  );
};

export default ScheduleBtn;
