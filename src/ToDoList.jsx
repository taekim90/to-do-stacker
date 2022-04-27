import ToDo from "./ToDo"

export default function ToDoList({ toDo, addToDo }) {
    const toDoList = toDo.map(toDo => {
        return (
            <ToDo 
                toDo={toDo}
                addToDo={addToDo}
            />
        )
    })

    return (
        <>
            <section>
                <h1>To Do List</h1>
                {toDoList}
            </section>
        </>
    )
}