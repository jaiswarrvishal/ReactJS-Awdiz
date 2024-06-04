function Mapping({ students }){
    console.log(students)
    return(
        <div>
            <h1>Mapping Place</h1>
            <ul>
                {students.map((student) => (
                    <h1>{student}</h1>
                ))}
            </ul>
        </div>
    )
}
export default Mapping;

