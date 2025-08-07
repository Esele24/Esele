import React, { useState } from "react";
export function PasswordToggle() {
  const [show, setShow] = useState(false);
  return (
    <div style={{ textAlign: "center" }}>
      <input
        type={show ? "text" : "password"}
        placeholder="Enter password"
      />
      <label>
        <input
          type="checkbox"
          onChange={() => setShow(!show)}
        /> Show Password
      </label>
    </div>
  );
}