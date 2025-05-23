import React, { useState } from "react";

const invitationTemplates = {
  Wedding: [
    { id: 1, title: "Elegant Wedding", image: "https://source.unsplash.com/300x200/?wedding,invitation" },
    { id: 2, title: "Classic Vows", image: "https://source.unsplash.com/300x200/?wedding,card" },
  ],
  Birthday: [
    { id: 3, title: "Fun Birthday", image: "https://source.unsplash.com/300x200/?birthday,invitation" },
    { id: 4, title: "Colorful Celebration", image: "https://source.unsplash.com/300x200/?birthday,party" },
  ],
  Anniversary: [
    { id: 5, title: "Golden Jubilee", image: "https://source.unsplash.com/300x200/?anniversary,invitation" },
    { id: 6, title: "Romantic Invite", image: "https://source.unsplash.com/300x200/?love,invitation" },
  ],
};

const GenerateInvitations = () => {
  const [eventType, setEventType] = useState("");
  const [templates, setTemplates] = useState([]);

  const handleEventChange = (e) => {
    const selectedType = e.target.value;
    setEventType(selectedType);
    setTemplates(invitationTemplates[selectedType] || []);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Generate E-Invitations</h2>
      
      <label className="block mb-4 text-lg font-medium text-gray-700">
        Select Event Type:
        <select
          value={eventType}
          onChange={handleEventChange}
          className="mt-2 w-full p-3 border border-gray-300 rounded-md"
        >
          <option value="">-- Choose an Event Type --</option>
          <option value="Wedding">Wedding</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </label>

      {templates.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {templates.map((template) => (
            <div key={template.id} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={template.image}
                alt={template.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600">{template.title}</h3>
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Customize
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenerateInvitations;

