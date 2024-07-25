"use client";

import { Button } from "../ui/button";
import useInformationStore from "@/store/getInformation";
import { timeSlotsEvening, timeSlotsMorning } from "@/constants/data";
import NewDepartment from "./NewDepartment";
import TableHeaders from "./TableHeaders";
import { timetableData, TimetableData, TimeSlot } from "@/constants/data"; // Import the types and data
import React from "react";

const MyTable = () => {
  const setTimeSlot = useInformationStore((state) => state.setTimeSlot);
  const Group = useInformationStore((state) => state.Group);
  const currentClass = useInformationStore((state) => state.Class);
  const cols =
    Group === "Bs Evening" || Group === "Intermediate Evening" ? 5 : 7;
  const { rowsLenght } = useInformationStore((state) => state);

  const currentTimetable: TimeSlot[][] = timetableData[currentClass] || [];
  console.log(currentTimetable);

  return (
    <div className="flex mt-7 px-1 ">
      <div className="mr-2 border-r-2">
        <div className="px-2">
          <Button
            variant={"destructive"}
            className=" py-5 text-md w-full  font-semibold "
          >
            Departments
          </Button>
        </div>
        <NewDepartment />
      </div>

      <div className="flex-1 w-full">
        <TableHeaders />

        <div className="grid gap-y-1 mt-1">
          {currentTimetable.map((classTimetable, rowIndex) => (
            <div key={rowIndex} className={`grid grid-cols-${cols} gap-x-2 `}>
              
              {classTimetable.map((timeSlot, colIndex) => (
       
                <div
                  key={colIndex}
                  className="w-full h-12 border bg-red-200 rounded-sm flex flex-col items-center justify-center"
                >
                  <h1 className="text-xs font-bold">{timeSlot.subject}</h1>
                  <h1 className="text-xs font-bold">{timeSlot.teacher}</h1>
                  <h1 className="text-xs font-bold">{timeSlot.room}</h1>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTable;