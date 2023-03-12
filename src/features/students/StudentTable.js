import { useSelector, useDispatch } from "react-redux"
import { addFilter, removeFilter } from "../data/dataSlice"
import Checkboxes from "../Checkboxes/Checkboxes"

function StudentTable() {

    const dispatch = useDispatch()

    const data = useSelector(state => state.data.newData)
    const filter = useSelector(state => state.data.filters)
    const allAssignments = data.map(assignments => assignments.assignment)
    const assignments = [...new Set(allAssignments)].map((name, index) => {return {id: index + 1, name: name}})
    const names = assignments.map(item => item.name)

    function createAverage(student) {
        const average = []
        student.forEach(assignment => {
            average.push(calculateAverages(assignment))
        })
        return average
    }
    
    function calculateAverages(assignment) {
        const difficulty = data.filter(item => item.assignment.includes(assignment)).map(assignment => assignment.difficulty)
        const fun = data.filter(item => item.assignment.includes(assignment)).map(assignment => assignment.fun)
        const difficultyAverage = difficulty.reduce((a, b) => a + b, 0) / difficulty.length
        const funAverage = fun.reduce((a, b) => a + b, 0) / fun.length
        return {assignment: assignment, difficulty: difficultyAverage, fun: funAverage}
    }

    function handleChange(name) {
        if (filter.includes(name)) {
            dispatch(removeFilter(name))
        } else {
            dispatch(addFilter(name))
        }
    }

    return (
        <div className="student-table">
            <h2>Average Rating per assignment</h2>
            <div className="checkboxes">
                <Checkboxes toggleCheckbox={handleChange} name={"difficulty"}/>
                <Checkboxes toggleCheckbox={handleChange} name={"fun"}/>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th className="th">Assignments</th>
                        {!filter.includes("difficulty") ?
                            <th className="th difficulty">Difficulty</th>
                        :null}
                        {!filter.includes("fun") ?
                            <th className="th fun">Fun</th>
                        :null}
                    </tr>
                </thead>
                <tbody>
                    {createAverage(names).map(item => {
                        return (    
                            <tr key={item.assignment}>
                                <td className="td">{item.assignment}</td>
                                {!filter.includes("difficulty") ?
                                    <td className="td">{item.difficulty.toFixed(1)}</td>
                                :null}
                                {!filter.includes("fun") ?
                                    <td className="td">{item.fun.toFixed(1)}</td>
                                :null}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default StudentTable