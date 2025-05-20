

import { useState } from "react";

export default function CreateEvent() {
  const [eventData, setEventData] = useState({
    name: "",
    date: "",
    location: "",
    type: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Created:", eventData);
    alert("Event created successfully!");
    // You can redirect or reset form here
  };

  return (
    <div className="p-6 max-w-lg mx-auto mt-10 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6">Create a New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />
        <select
          name="type"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        >
          <option value="">Select Event Type</option>
          <option value="Wedding">Wedding</option>
          <option value="Birthday">Birthday</option>
          <option value="Corporate">Corporate</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          name="description"
          placeholder="Event Description"
          rows="4"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Create Event
        </button>
      </form>
    </div>
  );
}
