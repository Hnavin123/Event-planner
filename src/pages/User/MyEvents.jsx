import { useNavigate } from "react-router-dom";

export default function MyEvents() {
  const navigate = useNavigate();

  // ✅ Simulated list of events (mock data)
  const events = [
    {
      id: 1,
      name: "Wedding of A & B",
      date: "2025-06-10",
      location: "Delhi",
    },
    {
      id: 2,
      name: "Corporate Meetup",
      date: "2025-07-01",
      location: "Mumbai",
    },
  ];

  const handleView = (id) => {
    // Later, you’ll navigate to Event Details page
    navigate(`/user/dashboard/events/${id}`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">My Events</h2>
      {events.length === 0 ? (
        <p>No events created yet.</p>
      ) : (
        <ul className="space-y-4">
          {events.map((event) => (
            <li
              key={event.id}
              className="border p-4 rounded shadow-sm flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold">{event.name}</h3>
                <p>{event.date} | {event.location}</p>
              </div>
              <button
                onClick={() => handleView(event.id)}
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
              >
                View
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

