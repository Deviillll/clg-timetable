"use client";

import { Button } from "../ui/button";
import useInformationStore from "@/store/getInformation";
import { newData } from "@/constants/data";
import NewDepartment from "./NewDepartment";
import TableHeaders from "./TableHeaders";
interface TimeSlot {
  startTime: string;
  endTime: string;
  id: string;
}

const MyTable = () => {
  // const TimeSlot = useInformationStore((state) => state.TimeSlot);
  const Class = useInformationStore((state) => state.class);
  const Group = useInformationStore((state) => state.Group);
  const cols =
    Group === "Bs Evening" || Group === "Intermediate Evening" ? 5 : 7;
  const { rowsLenght } = useInformationStore((state) => state);

  return (
    <div className="flex mt-7 px-1 ">
      <div className="mr-2 border-r-2">
        <div className="px-2">
          {" "}
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
          {Array.from({ length: rowsLenght }).map((_, rowIndex) => (
            <div key={rowIndex} className={`grid grid-cols-${cols} gap-x-2 `}>
              {Array.from({ length: cols }).map((_, colIndex) => (
                <div
                  key={colIndex}
                  className="w-full h-12 border bg-red-200 rounded-sm"
                >
                 
                  
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
