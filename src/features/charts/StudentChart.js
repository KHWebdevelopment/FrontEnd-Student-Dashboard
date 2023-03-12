import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryLine, VictoryTooltip } from "victory"
import { useSelector, useDispatch } from "react-redux"
import { addFilter, removeFilter } from "../data/dataSlice"
import Checkboxes from "../Checkboxes/Checkboxes"

function StudentChart({student}) {

    const dispatch = useDispatch()

    const data = useSelector(state => state.data.newData)
    const filter = useSelector(state => state.data.filters)
    const allAssignments = data.map(assignments => assignments.assignment)
    const assignments = [...new Set(allAssignments)]
    const studentFilter = data.filter(item => item.name.includes(student))

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
                <h2>Ratings per assignment</h2>
                <VictoryChart
                    width={1100}
                    height={577}
                    domain={{y: [0, 5]}}
                    domainPadding={{x:10, y:0}}
                    padding={ student ? {top: 10, bottom: 120, right: 70, left: 50} : {bottom: 80, right: 10, left: 40}}  
                >
                    {filter.includes("line") ? 
                        <VictoryGroup>
                        {!filter.includes("difficulty") ? 
                        <VictoryLine
                            data={studentFilter}
                            style={{data: {stroke: "crimson"} }} 
                            x={student ? "assignment" : "name"}
                            y="difficulty" 
                        />: null}
                    
                        {!filter.includes("fun") ? 
                        <VictoryLine
                            data={studentFilter} 
                            style={{data: {stroke: "steelblue"} }} 
                            x={student ? "assignment" : "name"} 
                            y="fun" 
                        />: null }
                        </VictoryGroup>
                    :
                        <VictoryGroup offset={9}>
                        {!filter.includes("difficulty") ? 
                            <VictoryBar
                                barWidth={7}
                                labelComponent={<VictoryTooltip 
                                    flyoutPadding={20}
                                    style = {{fontSize: 20}}
                                />}
                                labels={({datum}) => `Assignment: ${datum.assignment} \n Difficulty: ${datum.difficulty.toFixed(1)}`}
                                data={studentFilter}
                                style={{data: {fill: "crimson"} }} 
                                x={student ? "assignment" : "name"}
                                y="difficulty" 
                            /> 
                        : null}

                        {!filter.includes("fun") ? 
                            <VictoryBar
                                barWidth={7}
                                labelComponent={<VictoryTooltip 
                                    flyoutPadding={20}
                                    style = {{fontSize: 20}}
                                />}
                                labels={({datum}) => `Assignment: ${datum.assignment} \n Fun: ${datum.fun.toFixed(1)}`}
                                data={studentFilter}
                                style={{data: {fill: "steelblue"} }} 
                                x={student ? "assignment" : "name"} 
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
                        tickValues={assignments}
                        style={{tickLabels: { fontSize: 12, angle: 45, textAnchor: "start"}}} 
                    />
                </VictoryChart>
                <div className="checkboxes">
                    <Checkboxes toggleCheckbox={handleChange} name={"difficulty"}/>
                    <Checkboxes toggleCheckbox={handleChange} name={"fun"}/>
                    <Checkboxes toggleCheckbox={handleChange} name={"line"} />
                </div>
            </div>
        </div>
    )
}

export default StudentChart