import { useEffect, useState } from "react";
import Header from "./Header";
import Task from "./Task";
import Pagination from "./Pagination";
import TaskFrame from "./TaskFrame";
import TaskInput from "./TaskInput";
import { Todo } from "../models/todo.model";

const Main = () => {
    const [simpleDates, setSimpleDates] = useState<Date[]>([])
    const [mobileDates, setMobileDates] = useState<Date[]>([])
    const [activeDate] = useState<Date>(new Date())
    const [todos, setTodos] = useState<Todo[]>([])
    const[displayOnright, setDisplayOnright] = useState<String>('calendar')
    const [singleTodo, setSingleTodo] = useState<Todo>({ id: 0, userId: 0, title: "", completed: false })
    const [isEditting, setIsEdittting] = useState(false)
    const [itemToEdit, setItemToEdit] = useState<Todo>({ id: 0, userId: 0, title: "", completed: false })

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10

    const totalPages = Math.ceil(todos.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = todos.slice(startIndex, endIndex);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
    
    const ApiPath = 'https://jsonplaceholder.typicode.com/todos'

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const goToPage = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
        }
    };

    const getDatesFor11DaysAhead = () => {
        const today = new Date();
        let next11Days: any[] = [];

        for (let i = 0; i < 11; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);
            next11Days.push(nextDate);
        }

        setSimpleDates(next11Days);  
        setMobileDates([...next11Days].splice(0, 6))
    }

    const getTodos = async () => {
        try {
            const response = await fetch(ApiPath)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setTodos(data)
        } catch (error) {
            alert(`Fetch error: ${error}`)
        }
    }

    const deleteTodo = (todoId: number) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
        setDisplayOnright('')
    }

    const openEditForm = async (todoId: number) => {
        setIsEdittting(true)

        try {
            const response = await fetch(`${ApiPath}/${todoId}`)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setItemToEdit(data)
            setDisplayOnright('todoInput')
        } catch (error) {
            alert(`Fetch error: ${error}`)
        }
    }

    const openCreateForm = (arg: boolean) => {
        setIsEdittting(!arg)
        setDisplayOnright('todoInput')
    }

    const handleTodoInput = (data: Todo) => {
        if(!isEditting) {
            data.id = todos[todos.length - 1].id + 1
            data.userId = Math.floor(Math.random() * (100 - 1 + 1)) + 1
            setTodos([data, ...todos])
            return
        }
        const todo = todos.find(todo => todo.id === data.id) as Todo
        todo.title = data.title
        setTodos([...todos])
    }

    const onCompleted = (todoId: number) => {
        const todo = todos.find(todo => todo.id === todoId) as Todo
        todo.completed = !todo.completed
        setTodos([...todos])
    }

    const receiveTodo = (todoId: number) => {
        setSingleTodo(todos.find(todo => todo.id === todoId) as Todo)
        setDisplayOnright('singleTodo')
    }

    useEffect(() => {
        getTodos()
        getDatesFor11DaysAhead()
    }, [])

    return ( 
        <>
            <Header openCreateForm={openCreateForm} />
            <div className="main-body md:mt-8 xs:mt-3 md:px-8 xs:px-4 gap-6">
                <div className="left-side md:border-r-2 xs:border-r-0 md:pr-5 xs:pr-0">
                    <div className="simple-date mb-8">
                        <h3 className="text-base font-semibold">September 2023</h3>
                        <div className="date-thumbnail-list gap-4 flex items-center md:flex xs:hidden">
                            {
                                simpleDates.map(date => (
                                    <div className={activeDate.getDate() === date.getDate() ? 'active date-thumbnail mt-4 rounded-lg' : 'date-thumbnail mt-4 rounded-lg'}>
                                        <span>{days[date.getDay()]}</span>
                                        <span>{date.getDate()}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="date-thumbnail-list gap-1 flex items-center xs:flex md:hidden">
                            {
                                mobileDates.map(date => (
                                    <div className={activeDate.getDate() === date.getDate() ? 'active date-thumbnail mt-4 rounded-lg' : 'date-thumbnail mt-4 rounded-lg'}>
                                        <span className="text-xs">{days[date.getDay()]}</span>
                                        <span className="text-xs">{date.getDate()}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="todo-list mb-8">
                        <div className="heading">
                            <h3 className="text-base font-semibold mb-4">My Tasks</h3>
                        </div>
                        <div className="list md:max-h-none md:overflow-auto xs:max-h-72 xs:overflow-scroll">
                            {
                                currentData.map((todo) => (
                                    <Task todo={todo} onCompleted={onCompleted} receiveTodo={receiveTodo} checked={todo.completed} key={todo.id} />
                                ))
                            }
                        </div>
                    </div>
                    <hr />
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} goToPage={goToPage} />
                    <div className="mobile-input hidden md:hidden xs:flex items-start justify-between">
                        <input disabled={true} onFocus={() => setDisplayOnright('todoInput')} className="bg-transparent text-base outline-transparent" placeholder="Input task" type="text" />
                        <img src="/assets/images/icons/mic.png" alt="" />
                    </div>
                </div>
                <div className="right-side md:pl-6 xs:pl-0">
                    {displayOnright === 'singleTodo' && <TaskFrame setDisplayOnright={setDisplayOnright} openEditForm={openEditForm} deleteTodo={deleteTodo} todo={singleTodo} />}
                    {displayOnright === 'todoInput' && <TaskInput handleTodoInput={handleTodoInput} setDisplayOnright={setDisplayOnright} itemToEdit={itemToEdit} isEditting={isEditting} setItemToEdit={setItemToEdit} />}
                </div>
                
            </div>
        </>
    );
}
 
export default Main;