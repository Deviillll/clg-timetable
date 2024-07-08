
import groups from "@/constants/data";
import { Button } from "@/components/ui/button";

// import { useState } from "react";

import useInformationStore from "@/store/getInformation";

type Props = {};
interface Group {
  name: string;
  id: string;
}

const GroupList = (props: Props) => {
  const Group = useInformationStore((state) => state.Group);
  const setGroup = useInformationStore((state) => state.setGroup);
    
 // const [selectedGroup, setSelectedGroup] = useState<string>("");
 
  console.log("from zustand",Group)
  return (
    <div className="mt-2">
     
      <h1 className="text-2xl text-center text-white uppercase font-extrabold tracking-wider mb-4">
        select your group
      </h1>
      <div className="flex gap-x-4 justify-center">
        {groups.map((group: Group) => (
          <Button
            key={group.id}
            onClick={() => {
             // setSelectedGroup(group.name);
              setGroup(group.name);
            }}
            className={`${Group === group.name ? "bg-white text-black hover:bg-white " : ""}`}
          >
            {group.name}{" "}
          </Button>
        ))}
      </div>
    
    </div>
  );
};

export default GroupList;
