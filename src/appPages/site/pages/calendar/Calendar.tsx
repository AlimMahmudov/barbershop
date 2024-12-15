"use client";
import React, { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./custom-calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const MyCustomCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Value>(null);
  const handleDateChange: CalendarProps["onChange"] = (value) => {
    setSelectedDate(value);
  };
  console.log(
    Array.isArray(selectedDate)
      ? `${selectedDate[0]?.toDateString()} - ${selectedDate[1]?.toDateString()}`
      : selectedDate?.toDateString()
  );

  return (
    <div className="calendar-container">
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        locale="ru-RU"
      />
    </div>
  );
};

export default MyCustomCalendar;
