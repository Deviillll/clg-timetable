"use client"
import { Button } from "../ui/button";
import { groupSubCategories } from "@/constants/data";
import useInformationStore from "@/store/getInformation";

type Props = {
  selectedGroup: string | null;
};
interface groupSubCategory {
  id: string;
  groupName: string;
  subCategory?: string[];
}

const GroupSubCategory = (props: Props) => {
  const Class = useInformationStore((state) => state.Class);
  const setClass = useInformationStore((state) => state.setClass);
 // const [selectedClass, setSelectedClass] = useState<string>('');
 
  
  return (
    <div className="mt-3">
     {props.selectedGroup &&  <h1 className="text-2xl text-white text-center uppercase font-bold mb-4 ">
        Select your class
      </h1>}
      {groupSubCategories.map((classs: groupSubCategory) => (
        <div key={classs.id} className="flex gap-x-4 justify-center">
          {classs.subCategory?.map((subCategory) => (
            <div>
              <Button
              onClick={() => {
                // setSelectedClass(subCategory)
                setClass(subCategory)
              }
              }
                key={subCategory}
                className={`${
                  props.selectedGroup === classs.groupName ? "" : "hidden"
                } ${Class===subCategory ? "bg-white text-black hover:bg-white" :null} `}
              >
                {subCategory}
              </Button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GroupSubCategory;
