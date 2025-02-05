import React, { useState, useEffect } from "react";

function AdminPanel() {
  const [messages, setMessages] = useState([]);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    // Fetch messages and quotes from the backend or database
    // For now, we will mock the data
    setMessages([
      { id: 1, name: "John Doe", message: "Inquiry about shipment." },
      { id: 2, name: "Jane Smith", message: "Quote request for freight." },
    ]);
    setQuotes([
      { id: 1, company: "ABC Corp", quote: "$500" },
      { id: 2, company: "XYZ Ltd", quote: "$700" },
    ]);
  }, []);

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <div className="messages">
        <h2>Contact Messages</h2>
        <ul>
          {messages.map((message) => (
            <li key={message.id}>
              {message.name}: {message.message}
            </li>
          ))}
        </ul>
      </div>
      <div className="quotes">
        <h2>Quote Requests</h2>
        <ul>
          {quotes.map((quote) => (
            <li key={quote.id}>
              {quote.company}: {quote.quote}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminPanel;
