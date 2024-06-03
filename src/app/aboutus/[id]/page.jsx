"use client"
import { useParams } from "next/navigation";
import React from "react";
const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

export default function Dynamic() {
  const params = useParams();
  const { id } = params;
  const developerId = parseInt(id, 10);
  const developer = details.find((detail) => detail.id === developerId);
  return (
    <div>
      {developer ? (
        <h1>
          {developer.name} {developer.role}
        </h1>
      ) : (
        <h1>Developer Not exist</h1>
      )}
    </div>
  );
}
