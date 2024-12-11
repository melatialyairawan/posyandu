import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

const Calendar = () => {
    const [view, setView] = useState("bulan");
    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState([]);

    const changeWeek = (direction) => {
        setCurrentDate(
            new Date(currentDate.setDate(currentDate.getDate() + (direction === "next" ? 7 : -7)))
        );
    };

    const changeMonth = (direction) => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + (direction === "next" ? 1 : -1), 1)
        );
    };

    const getDaysInWeek = () => {
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay()); // Start on Sunday
        return Array.from({ length: 7 }, (_, i) => {
            const date = new Date(startOfWeek);
            date.setDate(startOfWeek.getDate() + i);
            return date;
        });
    };

    const getDaysInMonth = () => {
        const days = [];
        const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

        for (let day = 1; day <= endOfMonth.getDate(); day++) {
            days.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
        }
        return days;
    };

    const renderWeekView = () => {
        const days = getDaysInWeek();
        const hours = Array.from({ length: 24 }, (_, i) => i);

        return (
            <div className="relative border border-gray-300 overflow-x-auto">
                <div className="grid grid-cols-8 border-b border-gray-300 min-w-[800px]">
                    <div className="bg-gray-100 text-center p-2 text-sm font-semibold text-gray-500">
                        GMT+07
                    </div>
                    {days.map((day) => (
                        <div key={day.toISOString()} className="bg-gray-100 text-center p-2 text-sm font-semibold text-gray-500">
                            {day.toLocaleDateString("id-ID", { weekday: "short", day: "numeric" })}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-8 h-[calc(100vh-200px)] min-w-[800px]">
                    <div className="border-r border-gray-300">
                        {hours.map((hour) => (
                            <div
                                key={hour}
                                className="h-12 border-b border-gray-300 text-center text-xs text-gray-500"
                            >
                                {hour}:00
                            </div>
                        ))}
                    </div>

                    {days.map((day) => {
                        const dayEvents = events.filter(
                            (event) => new Date(event.date).toDateString() === day.toDateString()
                        );
                        return (
                            <div key={day.toISOString()} className="relative border-r border-gray-300">
                                {hours.map((hour) => (
                                    <div key={hour} className="h-12 border-b border-gray-300"></div>
                                ))}
                                {dayEvents.map((event, idx) => {
                                    const eventStart = new Date(event.date);
                                    const eventDuration = event.duration || 1;
                                    const startHour = eventStart.getHours();
                                    const top = startHour * 48;
                                    const height = eventDuration * 48;
                                    return (
                                        <div
                                            key={idx}
                                            className={`absolute left-1 right-1 mt-1 p-2 text-xs text-white rounded bg-blue-500`}
                                            style={{
                                                top: `${top}px`,
                                                height: `${height}px`,
                                            }}
                                        >
                                            {event.title}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    const renderMonthView = () => {
        const days = getDaysInMonth();

        return (
            <div className="relative overflow-x-auto">
                <div className="grid grid-cols-7 text-center min-w-[800px]">
                    {[
                        "MIN",
                        "SEN",
                        "SEL",
                        "RAB",
                        "KAM",
                        "JUM",
                        "SAB",
                    ].map((day) => (
                        <div key={day} className="font-semibold text-gray-500 text-xs md:text-sm mb-2">
                            {day}
                        </div>
                    ))}

                    {days.map((day) => {
                        const dayEvents = events.filter(
                            (event) =>
                                new Date(event.date).toDateString() === day.toDateString()
                        );
                        return (
                            <div
                                key={day.toISOString()}
                                className="border h-20 md:h-32 p-2 relative overflow-hidden"
                            >
                                <div className="flex items-center justify-center text-xs md:text-sm text-gray-500">
                                    {day.getDate()}
                                </div>
                                {dayEvents.map((event, idx) => (
                                    <div
                                        key={idx}
                                        className={`mt-1 text-white text-[10px] md:text-xs rounded px-1 truncate ${event.color}`}
                                    >
                                        {event.title}
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                {view === "pekan" ? (
                    <>
                        <Button auto className="bg-primary text-white" onClick={() => changeWeek("prev")}>
                            &lt; Prev
                        </Button>
                        <h2 className="text-sm md:text-lg font-semibold">
                            {currentDate.toLocaleDateString("id-ID", { month: "long", year: "numeric" })}
                        </h2>
                        <Button auto className="bg-primary text-white" onClick={() => changeWeek("next")}>
                            Next &gt;
                        </Button>
                    </>
                ) : (
                    <>
                        <Button auto className="bg-primary text-white" onClick={() => changeMonth("prev")}>
                            &lt; Prev
                        </Button>
                        <h2 className="text-sm md:text-lg font-semibold">
                            {currentDate.toLocaleDateString("id-ID", { month: "long", year: "numeric" })}
                        </h2>
                        <Button auto className="bg-primary text-white" onClick={() => changeMonth("next")}>
                            Next &gt;
                        </Button>
                    </>
                )}
            </div>

            <div className="flex justify-end gap-2 mb-4">
                <Button
                    auto
                    className={view === "pekan" ? "bg-primary text-white" : "bg-white border border-gray-300 text-gray-400"}
                    onClick={() => setView("pekan")}
                >
                    Pekan
                </Button>
                <Button
                    auto
                    className={view === "bulan" ? "bg-primary text-white" : "bg-white border border-gray-300 text-gray-400"}
                    onClick={() => setView("bulan")}
                >
                    Bulan
                </Button>
            </div>

            {view === "pekan" ? renderWeekView() : renderMonthView()}
        </div>
    );
};

export default Calendar;
