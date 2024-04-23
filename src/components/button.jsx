import React from "react";

function Button({ styles }) {
  return (
    <button
      type="button"
      className={`py-2 px-10 font-montserrat font-medium text-[18px] bg-blue-200 rounded-[10px] outline-none ${styles}`}
    >
      Start
    </button>
  );
}

export default Button;
