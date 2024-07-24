"use client";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import groups from "@/constants/data";
  import {timeSlotsEvening,timeSlotsMorning,groupSubCategories} from "@/constants/data";
  import { useState } from "react";
  interface Group {
    id: string;
    name: string;
  
    }

const Alert = () => {
  const [inputGroup, setInputGroup] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [inputClass, setInputClass] = useState<string>("");
  const [showClassSuggestions, setShowClassSuggestions] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputGroup(value);
    setShowSuggestions(value.trim() !== "");
  };
  const handleClassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputClass(value);
    setShowClassSuggestions(value.trim() !== "");
  };

  const filteredResults = groups.filter((item) =>
    item.name.toLowerCase().includes(inputGroup.toLowerCase())
  );
  const filteredClassResults = groups.filter((item) =>
    item.name.toLowerCase().includes(inputGroup.toLowerCase())
  );

  return (
    <div>
        <AlertDialog>
  <AlertDialogTrigger>ADD</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>ADD TimeTable</AlertDialogTitle>
     
    </AlertDialogHeader>
    <AlertDialogDescription>
      Are you sure you want to add this timetable?
    </AlertDialogDescription>
   

<div className="space-y-2">
  
<div className="flex flex-col w-full max-w-52  gap-1.5">
      <Label htmlFor="Group" className="font-semibold text-md">Group :</Label>
      <Input  value={inputGroup}
          onChange={handleInputChange} type="Group" id="Group" placeholder="Enter Group" />
          <ul role="list" className=" w-full space-y-1 divide-y divide-slate-200 ">
          { showSuggestions &&  filteredResults.map((result: Group) => (
            <li  onClick={()=>{setInputGroup(result.name); setShowSuggestions(false)}} className="cursor-pointer border hover:bg-gray-200 pl-3 truncate ">{result.name}</li>
          ))}
        </ul>
    </div>
    <div className="flex flex-col w-full max-w-52  gap-1.5">
      <Label htmlFor="Class" className="font-semibold text-md">Class :</Label>
      <Input  value={inputClass}
          onChange={handleClassChange} type="text" id="Class" placeholder="Enter Class" />
          <ul role="list" className=" w-full space-y-1 divide-y divide-slate-200 ">
          { showClassSuggestions &&  filteredResults.map((result: Group) => (
            <li  onClick={()=>{setInputClass(result.name); setShowClassSuggestions(false)}} className="cursor-pointer border hover:bg-gray-200 pl-3 truncate ">{result.name}</li>
          ))}
        </ul>
    </div>
    <div className="flex w-full max-w-52 items-center gap-1.5">
      <Label htmlFor="Time-Slot">Time</Label>
      <Input type="text" id="Time-Slot" placeholder="Enter Time-Slot" />
    </div>
</div>



    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

      
    </div>
  )
}

export default Alert
