import React from "react";
import ClientRequests from "./ClientRequests";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Система управления заявками</h1>
      <ClientRequests />
    </div>
  );
}

export default App;
