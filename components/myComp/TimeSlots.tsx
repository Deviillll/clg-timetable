"use client"
import { timeSlotsEvening, timeSlotsMorning } from "@/constants/data"
import { Button } from "../ui/button"
//import { useState } from "react";
import useInformationStore from "@/store/getInformation";
import { TableHeader } from "../ui/table";
type Props = {
    
}
interface TimeSlot {
    startTime: string;
    endTime: string;
    id: string;
    }

const TimeSlots = (props: Props) => {
    const TimeSlot = useInformationStore((state) => state.TimeSlot);
    const setTimeSlot = useInformationStore((state) => state.setTimeSlot);
    const Group = useInformationStore((state) => state.Group);

   // const [selectedTime, setSelectedTime] = useState<string>('');
    
  return (
    <div className="">
       {/* {Group &&
        <h1 className="text-2xl text-center text-white uppercase font-bold mb-4 ">
        Select your Time Slot
    </h1>
       } */}
        <div className="flex gap-x-2  ">

        {/* Morning Time Slots conditional rendering */}
        {Group === 'Bs Morning' || Group === 'Intermediate Morning' || Group === 'ADP' ?  timeSlotsMorning.map((time: TimeSlot) => (
            <div key={time.id} className=" ">
                <div>
                <Button
                 key={time.id}
                 size={"lg"}
                    onClick={() => {
                        setTimeSlot(time.startTime + ' - ' + time.endTime)
                    }}
                    className={`${TimeSlot === time.startTime + ' - ' + time.endTime ? 'bg-white text-black hover:bg-white' : ''} `}   
                >
                    {time.startTime} - {time.endTime}
                </Button>
                </div>
            </div>
        )) : null}

               {/* Evenning Time Slots conditional rendering */}

         {Group === 'Bs Evening' || Group === 'Intermediate Evening' ?  timeSlotsEvening.map((time: TimeSlot) => (
            <div key={time.id} className="flex gap-x-4 justify-center">
                <div>
                <Button
                 key={time.id}
                 onClick={() => {
                    setTimeSlot(time.startTime + ' - ' + time.endTime)
                }}
                className={`${TimeSlot === time.startTime + ' - ' + time.endTime ? 'bg-white text-black hover:bg-white' : ''}`}      
                >
                    {time.startTime} - {time.endTime}
                </Button>
                </div>
            </div>
        )) : null}


        </div>

    </div>
  )
}

export default TimeSlots