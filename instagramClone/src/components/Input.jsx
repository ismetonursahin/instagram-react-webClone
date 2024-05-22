import React, { useEffect, useRef, useState } from "react";

function Input({ label, type = "text", ...props }) {
  const inputRef = useRef();
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (show) {
      setInputType("text");
    } else if (type === "password") {
      setInputType("password");
    }
  }, [show]);
  return (
    <>
      <label className="relative focus-within:border-gray-400 flex bg-zinc-50 border rounded-sm">
        <input
          required={true}
          type={inputType}
          {...props}
          className="  w-full h-[38px]  outline-none text-xs  px-2 valid:pt-[10px] peer"
        />
        <small className="absolute left-[9px] top-1/2 -translate-y-1/2 text-xs text-gray-400 cursor-text pointer-events-none transition-all peer-valid:text-[10px] peer-valid:top-2.5">
          {label}
        </small>
        {type === "password" && props?.value && (
          <div
            onClick={() => setShow((show) => !show)}
            className=" h-full flex items-center text-sm font-semibold pr-2 bg-white cursor-pointer"
          >
            {show ? "Hide" : "Show"}
          </div>
        )}
      </label>{" "}
    </>
  );
}

export default Input;
