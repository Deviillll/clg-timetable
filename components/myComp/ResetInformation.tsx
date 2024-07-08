import React from 'react'
import { Button } from '../ui/button';
import useInformationStore from '@/store/getInformation';

const ResetInformation = () => {
    const setGroup= useInformationStore((state) => state.setGroup);
    const setClass= useInformationStore((state) => state.setClass);
    const setTimeSlot= useInformationStore((state) => state.setTimeSlot);
    const {Group,Class,TimeSlot} = useInformationStore((state) => state);
  return (
    <div>
        
      <Button
        className="px-5 ml-4 mt-2 "
        variant={"destructive"}

        onClick={() => {
            setGroup('');
            setClass('');
            setTimeSlot('');

         }}
      >
        Reset
      </Button>
      <div className='m-3'>
            <p>Group: {Group}</p>
            <p>Class: {Class}</p>
            <p>TimeSlot: {TimeSlot}</p>
            <p>you can get data / IDs</p>
      </div>
      
    </div>
  )
}

export default ResetInformation
