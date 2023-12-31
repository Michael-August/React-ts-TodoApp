import { Todo } from "../models/todo.model";

const TaskFrame = ({ todo, deleteTodo, openEditForm, setDisplayOnright }: {todo: Todo, deleteTodo: Function, openEditForm: Function, setDisplayOnright: any}) => {
    return ( 
        <>
            <div className="card py-5 md:px-6 xs:px-4 flex flex-col">
                <div className="close-btn flex items-center justify-between">
                    <div></div>
                    <img onClick={() => setDisplayOnright('')} className="cursor-pointer icon mb-4" src="/assets/images/icons/close.png" alt="" />
                </div>
                <div className="task-detail mb-8">
                    <h3 className="text-lg font-bold mb-8">{todo.title}</h3>
                    <div className="date flex gap-2 mb-2">
                        <img className="icon" src="/assets/images/icons/calendar.png" alt="" />
                        <span className="text-base font-medium">20th January, 2023</span>
                    </div>
                    <div className="time flex gap-2">
                        <img className="icon" src="/assets/images/icons/clock.png" alt="" />
                        <span className="text-base font-medium">8:00 - 10:00 AM</span>
                    </div>
                </div>
                <div className="btns flex items-center justify-between gap-3">
                    <button onClick={() => deleteTodo(todo.id)} className="outlined w-1/2 px-4 py-2">Delete</button>
                    <button onClick={() => openEditForm(todo.id)} className="w-1/2 px-5 py-2 text-white font-semibold rounded-lg bg-custom-blue">Edit</button>
                </div>
            </div>
        </>
    );
}
 
export default TaskFrame;