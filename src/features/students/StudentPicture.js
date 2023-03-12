export default function StudentPicture({studentpicture}) { 

    return (
        studentpicture.map((student) => {
            return (
                <div className="students" key={student.id}>
                    <h2>{student.name}</h2>
                    <img src={student.photo} alt={`${student.name}`} /> 
                </div>
            )
        })
    )
}