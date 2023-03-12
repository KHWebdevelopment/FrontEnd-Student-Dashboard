import { useSelector, useDispatch } from "react-redux"
import { addFilterStudent, removeFilterStudent } from "../data/dataSlice"
import StudentList from "./StudentList"

export default function StudentFilter({ student, display}) {

    const dispatch = useDispatch()

    const filter = useSelector(state => state.data.filters)
    const students = useSelector(state => state.data.students)
    const names = students.map(item => item.name)
   
    function handleCheckboxChange(name) {
        if (names.includes(name)) {
            if (filter.includes(name)) {
                dispatch(removeFilterStudent(name))
                
            } else {
                dispatch(addFilterStudent(name))
            }
        }
    }

    function handleSelectClick(eventNames) {
        eventNames.forEach(name => {
            if (names.includes(name)) {
                dispatch(addFilterStudent(name))
                dispatch(removeFilterStudent(name))
            }
        })
    }


    return (
        display ?
            student ?          
                <div className="students">
                    <h2>Select Student</h2>
                    <StudentList input={students} display="list" handleCheckboxOnChange={handleCheckboxChange} handleSelectOnClick={handleSelectClick}/>
                </div>
            :null
        : null 
    )
}