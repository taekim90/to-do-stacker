import ToDo from "./ToDo"

export default function Schedule({ toDoList, clearToDo}) {
    const schedule = toDoList.map(toDo => {
        return (
            <ToDo toDo={toDo}/>
        )
    })

    return (
        <>
            <section>
                <h1>Schedule</h1>
                {schedule}
                <button onClick={clearToDo}>
                    Clear
                </button>
            </section>
        </>
    )
}