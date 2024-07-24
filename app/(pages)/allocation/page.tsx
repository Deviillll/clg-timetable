import Alert from '@/components/myComp/Alert'
import DilogBox from '@/components/myComp/DilogBox'
import InputFilter from '@/components/myComp/InputFilter'
import Pop from '@/components/myComp/Pop'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      {/* <Pop />
      <DilogBox /> */}
      <Alert />
      <InputFilter />

    </div>
  )
}

export default page