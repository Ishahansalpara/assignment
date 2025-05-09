import React, { useState } from "react";

function GreetingCard() {
  const [userRole, setuserRole] = useState("guest");
  const [timeOfDay, setTimeOfDay] = useState("morning");

  let greetingMessage = "";
  const timeMessage = `Have a great ${timeOfDay}!`;

  if (userRole === "guest") {
    greetingMessage = "Hello! Welcome to Perminant";
  } else if (userRole === "returning") {
    greetingMessage = "Welcome back to Perminant!";
  } else if (userRole === "admin") {
    greetingMessage = "Admin access granted";
  }

  const backgroundColors = {
    morning: "linear-gradient(120deg, #ffdab9, #ffb199)",     
    afternoon: "linear-gradient(120deg, #ff758c, #ff7e5f, #ffcd3c)",   
    evening: "linear-gradient(120deg,rgb(167, 117, 222),rgb(128, 170, 242))"      
  };

  const cardStyle = {
    background: backgroundColors[timeOfDay],
    padding: "40px 20px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
    color: "#fcf6f9",
    fontFamily: "Segoe UI, sans-serif",
    transition: "background 0.3s ease",
    maxWidth: "500px",
    margin: "50px auto",
    

  };

  const selectorContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "25px",
    
  };

  const selectStyle = {
    padding: "8px 12px",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "rgba(252, 246, 249, 0.07)",
    color: "#fcf6f9",
    fontFamily: "Segoe UI, sans-serif",
    transition: "background 0.3s ease",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    outline: "none",
    border: "none",
    borderColor: "rgba(252, 246, 249, 0.2)",
    color: "rgba(73, 80, 87, 0.54)",
    
  };

  const text={
    color: " #fcf6f9",
    fontFamily: "Segoe UI, sans-serif",
    fontSize: "32px",
  }
  const text2={
    color: "rgba(243, 236, 236, 0.72)",
    fontFamily: "Segoe UI, sans-serif",
    fontSize: "25px",

  }
  return (
    <div style={cardStyle}>
      <h1 style={text}>{greetingMessage}</h1>
      <h2 style={text2}>{timeMessage}</h2>
      <div style={selectorContainerStyle}>
        <select value={userRole} onChange={(e) => setuserRole(e.target.value)} style={selectStyle}>
          <option value="returning">Returning</option>
          <option value="admin">Admin</option>
          <option value="guest">Guest</option>
        </select>
        <select value={timeOfDay} onChange={(e) => setTimeOfDay(e.target.value)} style={selectStyle}>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>
      </div>
    </div>
  );
}

export default GreetingCard;
