"use client";
import { timeSlotsEvening, timeSlotsMorning } from "@/constants/data";
import { Button } from "../ui/button";
import useInformationStore from "@/store/getInformation";

interface TimeSlot {
  startTime: string;
  endTime: string;
  id: string;
}

const TableHeaders = () => {
  const TimeSlot = useInformationStore((state) => state.TimeSlot);
  const setTimeSlot = useInformationStore((state) => state.setTimeSlot);
  const Group = useInformationStore((state) => state.Group);

  return (
    <div className="flex gap-x-1  w-full">
      {Group === "Bs Morning" ||
      Group === "Intermediate Morning" ||
      Group === "ADP"
        ? timeSlotsMorning.map((time: TimeSlot) => (
            <div key={time.id} className="w-full">
              <Button
                key={time.id}
                
                onClick={() => {
                  setTimeSlot(time.startTime + " - " + time.endTime);
                }}
                className={`${
                  TimeSlot === time.startTime + " - " + time.endTime
                    ? "bg-white text-black hover:bg-white"
                    : ""
                } w-full py-5 text-md font-semibold `}
              >
                {time.startTime} - {time.endTime}
              </Button>
            </div>
          ))
        : null}

      {Group === "Bs Evening" || Group === "Intermediate Evening"
        ? timeSlotsEvening.map((time: TimeSlot) => (
            <div key={time.id} className="w-full">
              <Button
                key={time.id}
                
                onClick={() => {
                  setTimeSlot(time.startTime + " - " + time.endTime);
                }}
                className={`${
                  TimeSlot === time.startTime + " - " + time.endTime
                    ? "bg-white text-black hover:bg-white"
                    : ""
                } w-full py-5 text-md font-semibold `}
              >
                {time.startTime} - {time.endTime}
              </Button>
            </div>
          ))
        : null}
    </div>
  );
};

export default TableHeaders;
