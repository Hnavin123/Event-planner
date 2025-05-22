import React, { useState } from "react";

const timeSlots = [];
// Generate 30-min slots from 10:00 to 20:00
for (let hour = 10; hour < 20; hour++) {
  timeSlots.push(`${hour}:00 AM`);
  timeSlots.push(`${hour}:30 AM`);
}
// Replace 12+ hours suffix for PM properly
for (let i = 20; i <= 20; i++) {
  timeSlots.push(`8:00 PM`);
}

function formatTime(time) {
  // Convert e.g. "10:00 AM" to 24h format if needed or just keep string
  return time;
}

export default function ScheduleDemoFeature() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Get dates for next 7 days
  const next7Days = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    next7Days.push(date);
  }

  const handleDateClick = (date) => {
    setSelectedDate(date.toDateString());
    setSelectedTime("");
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleSchedule = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time.");
      return;
    }
    alert(`Demo scheduled on ${selectedDate} at ${selectedTime}`);
    // Here you can add API call or further logic
    setShowCalendar(false);
    setSelectedDate("");
    setSelectedTime("");
  };

  return (
    <div className="bg-white bg-opacity-90 rounded-xl p-8 shadow-lg max-w-xl mx-auto text-center">
      <h3 className="text-3xl font-bold text-blue-700 mb-4 tracking-wide">Schedule a Demo</h3>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full mb-6 transition duration-300"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        {showCalendar ? "Close Calendar" : "Schedule a Demo"}
      </button>

      {showCalendar && (
        <div>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Select a Date:</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {next7Days.map((date) => (
                <button
                  key={date.toDateString()}
                  className={`px-4 py-2 rounded ${
                    selectedDate === date.toDateString()
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => handleDateClick(date)}
                >
                  {date.toLocaleDateString(undefined, {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </button>
              ))}
            </div>
          </div>

          {selectedDate && (
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Select a Time Slot:</h4>
              <div className="flex flex-wrap justify-center gap-3 max-w-sm mx-auto">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    className={`px-4 py-2 rounded ${
                      selectedTime === time
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                    onClick={() => handleTimeClick(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full mt-4 transition duration-300"
            onClick={handleSchedule}
            disabled={!selectedDate || !selectedTime}
          >
            Confirm Schedule
          </button>
        </div>
      )}
    </div>
  );
}
