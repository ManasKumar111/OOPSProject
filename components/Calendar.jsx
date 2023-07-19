import React, { useState } from "react";
import moment from "moment";
import styles from '../styles/Calendar.module.css'

function Calendar() {
    const [currentDate, setCurrentDate] = useState(moment());

    const monthStart = moment(currentDate).startOf("month");
    const monthEnd = moment(currentDate).endOf("month");
    const startDate = moment(monthStart).startOf("week");
    const endDate = moment(monthEnd).endOf("week");

    const calendarRows = [];
    let calendarDays = [];

    for (let day = startDate; day <= endDate; day = moment(day).add(1, "day")) {
        const dayFormatted = moment(day).format("D");
        const isCurrentMonth = moment(day).isSame(monthStart, "month");
        const isToday = moment(day).isSame(moment(), "day");
        const calendarDay = (
            <div
                key={day}
                className={styles.calendarDay}
            >
                <span className={styles.dayNumber}>{dayFormatted}</span>
            </div>
        );
        calendarDays.push(calendarDay);

        if (moment(day).isSame(endDate, "day")) {
            calendarRows.push(
                <div key={day} className={styles.calenderRow}>
                    {calendarDays}
                </div>
            );
            calendarDays = [];
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <button
                    onClick={() =>
                        setCurrentDate(moment(currentDate).subtract(1, "month"))
                    }
                >
                    {"<"}
                </button>
                <h2>{moment(currentDate).format("MMMM YYYY")}</h2>
                <button
                    onClick={() =>
                        setCurrentDate(moment(currentDate).add(1, "month"))
                    }
                >
                    {">"}
                </button>
            </div>
            <div className={styles.body}>
                <div className={styles.row}>
                    <div className={styles.dayHeader}>Sun</div>
                    <div className={styles.dayHeader}>Mon</div>
                    <div className={styles.dayHeader}>Tue</div>
                    <div className={styles.dayHeader}>Wed</div>
                    <div className={styles.dayHeader}>Thu</div>
                    <div className={styles.dayHeader}>Fri</div>
                    <div className={styles.dayHeader}>Sat</div>
                </div>
                {calendarRows}
            </div>
        </div>
    );
}
export default Calendar;
