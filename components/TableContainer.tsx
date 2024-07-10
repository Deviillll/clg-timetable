import DepartmentsList from "./myComp/DepartmentsList"
import MyTable from "./myComp/MyTable"
import NewDepartment from "./myComp/NewDepartment"



type Props = {}

const TableContainer = (props: Props) => {
  return (
    <div>
      {/* department List have some bugs */}
        {/* <DepartmentsList /> */}

        {/* new deparment have no bugs */}
        {/* <NewDepartment/> */}
        <MyTable/>
        
    </div>
  )
}

export default TableContainer