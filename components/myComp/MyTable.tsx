"use client";

import { Button } from "../ui/button";
import useInformationStore from "@/store/getInformation";
import { timeSlotsEvening, timeSlotsMorning } from "@/constants/data";
import NewDepartment from "./NewDepartment";
import TableHeaders from "./TableHeaders";
interface TimeSlot {
  startTime: string;
  endTime: string;
  id: string;
}

const MyTable = () => {
  const TimeSlot = useInformationStore((state) => state.TimeSlot);
  const setTimeSlot = useInformationStore((state) => state.setTimeSlot);
  const Group = useInformationStore((state) => state.Group);
  const timeSlots = Group === "Bs Evening" || Group === "Intermediate Evening" ? timeSlotsEvening : timeSlotsMorning;

  return (
    <div className="flex mt-7 px-1 ">
      <div className="mr-2 border-r-2">
       <div className="px-2"> <Button  variant={"destructive"} className=" py-5 text-md w-full  font-semibold ">Departments</Button></div>
        <NewDepartment />
      </div>
     




      <div className="flex-1 w-full">
        
        
       
        <TableHeaders />
       
        <div className="grid gap-y-1 mt-1">
       {timeSlotsMorning.map((time: TimeSlot) => (
         <div className={`${Group ==="Bs Evening" || Group==="Intermediate Evening" ? "grid grid-cols-5" :"grid grid-cols-7"}  gap-x-2`} >
         
        {timeSlots.map((time: TimeSlot) => (
           <div key={time.id} className="w-full h-12 border-2 "></div>
        ))}
       </div>
        ))} 
       </div>
      </div>
    </div>
  );
};

export default MyTable;
