import { useSelector } from "react-redux"
import "./checkboxes.css"

function Checkboxes({ toggleCheckbox, name }) {
    
    const filter = useSelector(state => state.data.filters)

    function handleChange() {
        toggleCheckbox(name)
    }

    return (
        <>
            <label className={name === "difficulty" ? "difficulty " : name === "fun" ? "fun" : "line"} >
                <input type="checkbox" onChange={handleChange} checked={name==="line" ? filter.includes(name) : !filter.includes(name)}/>
            {name}</label>
        </>
    )
}

export default Checkboxes