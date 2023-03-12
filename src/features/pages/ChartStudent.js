import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import StudentChart from "../charts/StudentChart"
import ProfilePicture from "../students/StudentPicture"

function Student() {

    let params = useParams()

    const studentData = useSelector(state => state.data.students)

    return (
        <main>
            <ProfilePicture studentpicture={studentData.filter(item => item.name.includes(params.studentName))}/>
            <StudentChart student={params.studentName}/>
        </main>
    )
}

export default Student