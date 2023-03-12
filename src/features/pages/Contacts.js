import { useSelector } from "react-redux"

export default function StudentCards() { 

    const studentContacts = useSelector(state => state.data.students) 

    return (
        <main>
            <div className="studentcards">
                { studentContacts.map((student) => {
                    return (
                        <div className="card" key={student.name}>
                            <img src={student.photo} alt={`${student.name}`} />
                            <h2>{student.name} {student.lastName}</h2>
                            <p className="text">
                                Age: {student.age} <br />
                                Email: {student.email} <br />
                                Phone: {student.phoneNumber}
                            </p>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}