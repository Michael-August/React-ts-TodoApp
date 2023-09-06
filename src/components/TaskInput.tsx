import { useState } from "react";

const TaskInput = () => {
    const [isEditting, setIsEdittting] = useState(false)
    return (  
        <>
            <div className="card py-5 px-6 mb-4 flex flex-col">
                <div className="close-btn flex items-center justify-between">
                    <h3 className="text-lg font-semibold mb-8">{isEditting === true ? 'Edit Task' : 'Add Task'}</h3>
                    <img className="cursor-pointer icon mb-4" src="/assets/images/icons/close.png" alt="" />
                </div>
                <div className="form-control mb-4">
                    <textarea name="" className="input px-4 py-3" id=""></textarea>
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
                    <button className="outlined w-1/2 px-4 py-2">Cancel</button>
                    <button className="w-1/2 px-5 py-2 text-white font-semibold rounded-lg bg-custom-blue">{isEditting === true ? 'Save' : 'Add'}</button>
                </div>
            </div>
        </>
    );
}
 
export default TaskInput;