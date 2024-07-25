import DepartmentsList from "./myComp/DepartmentsList"
import MyTable from "./myComp/MyTable"
import NewDepartment from "./myComp/NewDepartment"
import Timetable from "./myComp/TimeTable"



type Props = {}

const TableContainer = (props: Props) => {
  return (
    <div>
      {/* department List have some bugs */}
        {/* <DepartmentsList /> */}

        {/* new deparment have no bugs */}
        {/* <NewDepartment/> */}
        {/* <MyTable/>
         */}
         <Timetable/>
    </div>
  )
}

export default TableContainer