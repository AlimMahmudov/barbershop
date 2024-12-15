"use client";
import React, { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./custom-calendar.css";
import { useLanguageStore } from "@/shared/stores/Language";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const MyCustomCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Value>(null);
  const { translate } = useLanguageStore();
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
        locale={translate("en-EN", "ru-RU", "")}
      />
    </div>
  );
};

export default MyCustomCalendar;
