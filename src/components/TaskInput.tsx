import { useState } from "react";
import { TaskInputProps } from "../models/taskInput.model";
import { Todo } from "../models/todo.model";

const TaskInput = ({ isEditting, itemToEdit, setItemToEdit, setDisplayOnright, handleTodoInput }: TaskInputProps) => {

    const [taskFormState, setTaskFormState] = useState({
        id: 0,
        userId: 0,
        title: "",
        completed: false
    })

    const handleChange = (e: any) => {
        if(isEditting) {
            setItemToEdit((state: any) => ({
                ...state,
                [e.target.name]: e.target.value
            }))
        } else {
            setTaskFormState((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }))
        }
    }

    const submitForm = () => {
        if(!isEditting) {

            if(taskFormState.title === "") {
                alert("Please type in your task first!")
                return
            }
            handleTodoInput(taskFormState)
            setTaskFormState({id: 0, userId: 0, title: '', completed: false})
            return;
        }
        handleTodoInput(itemToEdit)
        setDisplayOnright('')
    }
    
    return (  
        <>
            <div className="card md:py-5 xs:py-2 md:px-6 xs:px-4 mb-4 flex flex-col">
                <div className="close-btn flex items-center justify-between">
                    <h3 className="text-lg font-semibold mb-8">{isEditting === true ? 'Edit Task' : 'Add Task'}</h3>
                    <img onClick={() => setDisplayOnright('')} className="cursor-pointer icon mb-4" src="/assets/images/icons/close.png" alt="" />
                </div>
                <div className="form-control mb-4">
                    <textarea onChange={handleChange} 
                        placeholder="Add Task"
                        value={isEditting == true && itemToEdit.title ? itemToEdit.title : taskFormState.title} 
                        name="title" className="input px-4 py-3" id=""></textarea>
                </div>
                <div className="config flex items-center mb-4">
                    <div className="today calendar px-4 py-2 mr-9 flex items-center gap-2">
                        <img src="/assets/images/icons/black-calendar.png" alt="" className="small-icon" />
                        <span className="text-zinc-500">Today</span>
                    </div>
                    <div className="today calendar px-4 py-2 mr-4 flex items-center gap-2">
                        <img src="/assets/images/icons/black-clock.png" alt="" className="small-icon" />
                        <span className="text-zinc-500">00:00</span>
                    </div>
                    <div className="today calendar px-4 py-2 flex items-center gap-2">
                        <img src="/assets/images/icons/black-clock.png" alt="" className="small-icon" />
                        <span className="text-zinc-500">00:00</span>
                    </div>
                </div>
                <div className="alarm-time flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                        <img style={{width: '16PX'}} src="/assets/images/icons/fill-bell.png" alt="" />
                        <span>10 Minute before</span>
                    </div>
                    <img style={{width: '16PX'}} src="/assets/images/icons/close.png" alt="" />
                </div>
                <div className="btns flex items-center justify-between gap-3">
                    <button onClick={() => setDisplayOnright('')} className="outlined w-1/2 px-4 py-2">Cancel</button>
                    <button onClick={submitForm} className="w-1/2 px-5 py-2 text-white font-semibold rounded-lg bg-custom-blue">{isEditting === true ? 'Save' : 'Add'}</button>
                </div>
            </div>
        </>
    );
}
 
export default TaskInput;