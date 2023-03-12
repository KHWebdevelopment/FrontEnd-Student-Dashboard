import { useSelector } from "react-redux"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import Logo from "../../assets/Winc-Logo.png"

export default function Navbar() {

    const students = useSelector(state => state.data.students)

    const [ isOpen, setIsOpen ] = useState(false)
    
    return (
        <div className="topnav">
            <div className="brand">
                <img className="brand-logo" src={Logo} alt="Winc-Logo" />
                <h1 className="brand-name">Student Dashboard</h1>
            </div>
            <div className="navigation">
                <NavLink to="">Home</NavLink>
                <button 
                    className="dropbtn" 
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    Students &#9660;
                    <div  
                        className=
                        {
                            isOpen ? "dropdown-content expanded" : "dropdown-content"
                        }
                    >
                        {students.map((student) => {
                            return (
                                <div key={student.name}>
                                    <NavLink  to={student.name}>{student.name}</NavLink>
                                </div>
                            )
                        })}
                    </div>
                </button>
                <NavLink to="studenttable">Student-table</NavLink>
                <NavLink to="contacts">Contacts</NavLink>
                <NavLink to="about">About</NavLink>
            </div>
        </div>
    )
}