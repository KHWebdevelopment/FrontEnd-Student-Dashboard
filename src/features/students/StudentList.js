import Checkboxes from "../Checkboxes/Checkboxes"

export default function StudentList({ input, handleCheckboxOnChange, handleSelectOnClick }) {
    const names = input.map(item => item.name)

    function handleCheckboxChange(name) {
        handleCheckboxOnChange(name)
    }
    
    function handleSelectClick(event) {
        const eventNames = event.target.name.split(",")
        handleSelectOnClick(eventNames)
    }
    return (
        <div className="studentslist">
            {input.map((student) => {
                return ( 
                    <div className="list-item" key={student.name}>
                        <Checkboxes toggleCheckbox={handleCheckboxChange} name={student.name} />
                    </div>
                )
            })}
            <button onClick={handleSelectClick} name={names}>Select All</button>
        </div>
    )
}