import React from "react";

const ExpiredNotice = () => {
  return (
    <div style={{ color: "red" }} className="expired-notice">
      <span style={{ color: "red" }}>Expired!!!</span>
      <p style={{ color: "red" }}>Please select a future date and time.</p>
    </div>
  );
};

export default ExpiredNotice;
