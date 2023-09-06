import { useState } from "react";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const TodoCalendar = () => {
    const [date, setDate] = useState(new Date());
    // const [value, onChange] = useState<Value>(new Date());

    const onChange = (selectedDate: Date) => {
        setDate(selectedDate);
    };
    return ( 
        <>
            <div>
                {/* <ExternalCalendar onChange={onChange} value={date} /> */}
            </div>
        </>
    );
}
 
export default TodoCalendar;