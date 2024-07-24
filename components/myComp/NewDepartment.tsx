"use client"
import { departments } from "@/constants/data";
import { Button } from "../ui/button";
import useInformationStore from "@/store/getInformation";
import {  useEffect } from "react";

type Props = {};

const NewDepartment = (props: Props) => {
  const { Group } = useInformationStore((state) => state);
  const { setRowsLenght } = useInformationStore((state) => state);
  const { rowsLenght } = useInformationStore((state) => state);

  // Filter departments based on the selected Group
  
  const filteredBsDepartments = departments.filter((department) => {
    if (Group === "Bs Morning" || Group === "Bs Evening" || Group === "ADP") {
      return department.name !== "Inter computer" && department.name !== "Inter physics";
    }
    return true; 
  });

 
  const filteredInterDepartments = departments.filter((department) => {
    if (Group === "Intermediate Morning" || Group === "Intermediate Evening") {
      return department.name == "Inter computer" || department.name == "Inter physics" 
    }
    return true; 
  });
  
 
  const filteredDepartments = Group === "Bs Morning" || Group === "Bs Evening" || Group === "ADP" ? filteredBsDepartments : filteredInterDepartments;


  const updateRowsLength = (newRowsLength:any) => {
    if (newRowsLength !== rowsLenght) {
      setRowsLenght(newRowsLength);
    }
  };
  useEffect(() => {
    updateRowsLength(filteredDepartments.length);
    console.log(rowsLenght);
  }, [filteredDepartments.length]);
  // setRowsLenght(filteredDepartments.length);
  // console.log(rowsLenght);


  return (
   
      <div className=" w-40 px-2">
        {filteredDepartments.map((department) => (
          <div key={department.id}>
            <Button className="h-12 mt-1 w-full">{department.name}</Button>
            {/* <div className="">
              {department.isDoubleGroup && Group !== "ADP" && department.group?.map((group) => (
                <Button variant={"destructive"} key={group} className=" w-full bg-slate-300 text-black h-12 mt-1" >
                  {group + " Group"}
                </Button>
              ))}
            </div> */}
          </div>
        ))}
      </div>
   
  );
};

export default NewDepartment;
