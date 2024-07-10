"use client";
import { departments } from "@/constants/data";
import { Button } from "../ui/button";
import useInformationStore from "@/store/getInformation";

type Props = {};

const DepartmentsList = (props: Props) => {
  const { Group } = useInformationStore((state) => state);



  const filteredBsDepartments = departments.filter((department) => {
    if (Group === "Bs Morning" || Group === "Bs Evening" || Group === "ADP") {
      return department.name !== "Inter computer" && department.name !== "Inter physics";
    }
    return true; // Include all other departments
  });
 
  const filteredInterDepartments = departments.filter((department) => {
    if (Group === "Intermediate Morning" || Group === "Intermediate Evening") {
      return department.name !== "Bs Morning" && department.name !== "Bs Evening" && department.name !== "ADP";
    }
    return true; // Include all other departments
  });
 
  const filteredDepartments = Group === "Bs Morning" || Group === "Bs Evening" || Group === "ADP" ? filteredBsDepartments : filteredInterDepartments;

   
  

 

  return (
    <div>
      <div className="flex flex-col w-[150px] px-2">
        {filteredDepartments.map((department) => (
          <div
            key={department.id} >
                {Group === "Bs Morning" || Group === "ADP" || Group === "Intermediate Morning" || Group === "Intermediate Evening" 
                ?( department.shift === "both" || department.shift==="morning") && (
                  <>
                   <Button className="mt-2 w-full">{department.name}</Button>
            <div className="flex gap-1">
              {department.isDoubleGroup && Group !=="ADP" &&
                department.group?.map((group) => (
                  <Button key={group} className="mt-2 w-full" size={"sm"}>
                    {group}
                  </Button>
                ))}
            </div>
                  </>
                  ):Group === "Bs Evening" && (department.shift === "both" || department.shift==="evening") && (   <>
                    <Button className="mt-2 w-full">{department.name}</Button>
             <div className="flex gap-1">
               {department.isDoubleGroup &&
                 department.group?.map((group) => (
                   <Button key={group} className="mt-2 w-full" size={"sm"}>
                     {group}
                   </Button>
                 ))}
             </div>
                   </>)
                }
           
                                    

           
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentsList;
