import { useParams } from "react-router-dom"
import StudentFilter from "../students/StudentFilter"
import StudentTable from "../students/StudentTable"

export default function Student() {

    let params = useParams()

    return (
        <main>
            <StudentFilter display={true} student={true}/>
            <StudentTable student={params.studentName}/>
        </main>
    )
}