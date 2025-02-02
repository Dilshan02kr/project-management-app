import { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef(({ label, textarea, ...props }, ref) => {
  return (
    <>
      <div className="input-container">
        <label>{label}</label>
        {textarea ? (
          <textarea ref={ref} {...props} />
        ) : (
          <input ref={ref} {...props} />
        )}
      </div>
    </>
  );
});

export default Input;
