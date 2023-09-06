import { useState } from "react";
import { Todo } from "../models/todo.model";

const Task: React.FC<{todo: Todo, onCompleted: any, checked: boolean}> = ({ todo, onCompleted, checked }) => {
    // const [checked, setChecked] = useState(false)

    // const handleChecked = () => {
    //     setChecked(!checked)
    // }
    return ( 
        <>
            <div className="task px-6 py-4 mb-4 flex items-center justify-between">
                <div className="checkbox-item flex items-center">
                    <div className="checkbox mr-3">
                        <label className="label" htmlFor="">
                            <input type="checkbox" checked={checked} />
                            <span onClick={() => onCompleted(todo.id)}  className="checkmark"></span>
                        </label>
                    </div>
                    <div className="item task-click flex flex-col">
                        <span className={todo.completed == true ? 'strike' : ''}>{todo.title}</span>
                        <span className={todo.completed == true ? "text-zinc-500 strike" : 'text-zinc-500'}>10:30 am - 11:30 am</span>
                    </div>
                </div>
                <div className="date">
                    <span className="text-zinc-500">Today</span>
                </div>
            </div>
        </>
    );
}
 
export default Task;