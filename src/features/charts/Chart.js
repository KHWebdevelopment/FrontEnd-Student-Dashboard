import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryLine, VictoryTooltip } from "victory"
import { useSelector, useDispatch } from "react-redux"
import { addFilter, removeFilter } from "../data/dataSlice"
import Checkboxes from "../Checkboxes/Checkboxes"
import "./charts.css"

function Chart() {

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
        <div>
            <div className="charts">
                <h2>Average Rating per assignment</h2>
                <VictoryChart
                    width={1100}
                    height={577}
                    domain={{y: [0, 5]}}
                    domainPadding={{x:10, y:0}}
                    padding={{top: 10, bottom: 120, right: 70, left: 50}}
                >
                {filter.includes("line") ? 
                        <VictoryGroup>
                        {!filter.includes("difficulty") ? 
                        <VictoryLine
                            data={createAverage(names)}
                            style={{data: {stroke: "crimson"} }} 
                            x="assignment"
                            y="difficulty" 
                        />: null}
                    
                        {!filter.includes("fun") ? 
                        <VictoryLine
                            data={createAverage(names)} 
                            style={{data: {stroke: "steelblue"} }} 
                            x="assignment" 
                            y="fun" 
                        />: null }
                        </VictoryGroup>
                    :
                        <VictoryGroup offset={9}>
                        {!filter.includes("difficulty") ? 
                            <VictoryBar
                                barWidth={7}
                                labels={({datum}) => `Assignment: ${datum.assignment} \n Difficulty: ${datum.difficulty.toFixed(1)}`}
                                labelComponent={<VictoryTooltip 
                                    flyoutPadding={20}
                                    style = {{fontSize: 20}}
                                />}
                                data={createAverage(names)}
                                style={{data: {fill: "crimson"} }} 
                                x="assignment"
                                y="difficulty" 
                            /> 
                        : null}

                        {!filter.includes("fun") ? 
                            <VictoryBar
                                barWidth={7}
                                labels={({datum}) => `Assignment: ${datum.assignment} \n Fun: ${datum.fun.toFixed(1)}`}
                                labelComponent={<VictoryTooltip 
                                    flyoutPadding={20}
                                    style = {{fontSize: 20}}
                                />}
                                data={createAverage(names)} 
                                style={{data: {fill: "steelblue"} }} 
                                x="assignment" 
                                y="fun" 
                            />
                        : null }
                        </VictoryGroup>
                    }
                    <VictoryAxis 
                        dependentAxis
                        tickValues={[0, 1, 2, 3, 4, 5]} 
                        style={{ 
                            tickLabels: { fontSize: 12 },
                        }}/>
                    <VictoryAxis
                        tickValues={names}
                        style={{tickLabels: { fontSize: 12, angle: 45, textAnchor: "start"}}} />
                </VictoryChart>
                <div className="checkboxes">
                    <Checkboxes toggleCheckbox={handleChange} name={"difficulty"}/>
                    <Checkboxes toggleCheckbox={handleChange} name={"fun"}/>
                    <Checkboxes toggleCheckbox={handleChange} name={"line"}/>
                </div>
            </div>
        </div>
    )
}

export default Chart