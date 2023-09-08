import { useState, useEffect } from "react";

const Header = ({openCreateForm}: {openCreateForm: Function}) => {
    const [timeOfDay, setTimeOfDay] = useState('');

    useEffect(() => {
        const updateTimeOfDay = () => {
            const now = new Date();
            const currentHour = now.getHours();

            if (currentHour >= 0 && currentHour < 12) {
                setTimeOfDay('Morning');
            } else if (currentHour >= 12 && currentHour < 17) {
                setTimeOfDay('Afternoon');
            } else {
                setTimeOfDay('Evening');
            }
        };

        updateTimeOfDay();

        const intervalId = setInterval(updateTimeOfDay, 60000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return ( 
        <>
            <div className="header px-8 flex items-center justify-between">
                <div className="greetings">
                    <h1 className="text-3xl text-#101828 mt-12 font-semibold">Good {timeOfDay}</h1>
                    <span className="text-gray-600 text-base">You got some task to do. </span>
                </div>
                <div className="btn">
                    <button onClick={() => openCreateForm(true)} className="flex items-center justify-center px-4 py-2 text-white font-semibold rounded-lg bg-custom-blue">
                        <img src="/assets/images/icons/plus.png" alt="" />
                        Create New Task
                    </button>
                </div>
            </div>
        </>
    );
}
 
export default Header;