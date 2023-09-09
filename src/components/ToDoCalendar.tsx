import { useState } from "react";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const TodoCalendar = () => {
    const [date, setDate] = useState(new Date());
    // const [value, onChange] = useState<Value>(new Date());

    const onDateChange = (selectedDate: Date) => {
        setDate(selectedDate);
    };
    return ( 
        <>
            <div>
                
            </div>
        </>
    );
}
 
export default TodoCalendar;