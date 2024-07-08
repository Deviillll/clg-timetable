"use client"
import GroupList from "./myComp/Groups"
import GroupSubCategory from "./myComp/GroupSubCategory"
import ResetInformation from "./myComp/ResetInformation";
import TimeSlots from "./myComp/TimeSlots"
import useInformationStore from "@/store/getInformation";

const InformationContainer = () => {
    const Group = useInformationStore((state) => state.Group);
  return (
    <div>
        <ResetInformation />
        <div>
        <GroupList />
        </div>

<div>
     <GroupSubCategory selectedGroup={Group} />
     </div>
     <div>
        <TimeSlots selectedGroup={Group} />
     </div>
      
    </div>
  )
}

export default InformationContainer
