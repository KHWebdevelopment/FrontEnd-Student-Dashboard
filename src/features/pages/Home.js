import Chart from "../charts/Chart"
import StudentFilter from "../students/StudentFilter"
import "./pages.css"

function Home() {
    return (
        <main>
            <StudentFilter display={true} student={true}/>
            <Chart /> 
        </main>
    )
}

export default Home