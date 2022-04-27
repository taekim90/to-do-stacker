export default function ToDo({ toDo, addToDo }) {
    return (
        <>
            <div
                className='todo'
                onClick={()=>{
                    addToDo(toDo)
                }}
            >
                <p>{toDo.name}</p>
            </div>
        </>
    )
}