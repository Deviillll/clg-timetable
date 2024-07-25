"use client";
import React from "react";
import TableHeaders from "./TableHeaders";
import { Button } from "../ui/button";
import { morningBsClass ,eveningBsClass} from "@/constants/data";
import useInformationStore from "@/store/getInformation";
const Timetable = () => {
  const Group = useInformationStore((state) => state.Group);
  const Classs= Group === 'Bs Morning' ? morningBsClass : eveningBsClass;

  return (
    <div className="flex flex-col my-8 px-1">
      <div className="flex gap-x-1">
        <div className="w-40">
          <Button  className="h-10 w-full">
            Departments
          </Button>
        </div>
        <div className="w-full ">
        
          <TableHeaders />
        </div>
      </div>

    <div className="mt-2">
    {Classs.map((cls, index) => (
        <div
          key={index}
          className="grid grid-cols-8 text-center mt-2 h-12   "
        >
          
            <Button   className="w-[140px] h-full  ">{cls.name}</Button>
          
          
          {cls.subjects.map((subject, idx) => (
            <div key={idx} className="font-semibold  ">
             <Button variant={'outline'} className="w-[94%] h-full py-4">{subject}</Button>
              
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Timetable;
