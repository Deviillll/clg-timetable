"use client";
import groups from "@/constants/data";
import { useState } from "react";
import { Input } from "../ui/input";
interface Group {
    id: string;
    name: string;
  
    }

const InputFilter = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const filteredResults = groups.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );
 

  return (
    <div className="max-w-sm w-full">
      <div>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type to autocomplete..."
        />
      </div>
      <div>
        <ul>
          {inputValue &&   filteredResults.map((result: Group) => (
            <h1 className="cursor-pointer">{result.name}</h1>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InputFilter;
