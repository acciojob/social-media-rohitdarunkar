import React, { useState } from "react";

export default function Notifications() {
  const [data, setData] = useState([]);

  const load = () => {
    setData([
      { id: 1, text: "Uriah says hi!" },
      { id: 2, text: "Magnus sent a gift" }
    ]);
  };

  return (
    <div>
      <h2>Notifications</h2>

      <button className="button" onClick={load}>
        Refresh Notifications
      </button>

      <section className="notificationsList">
        {data.map(n => (
          <div key={n.id}>{n.text}</div>
        ))}
      </section>
    </div>
  );
}