import { useState } from "react";

const Test = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <button
        className="py-2 px-4 bg-blue-600 text-white rounded"
        onClick={() => setShow(!show)}
      >
        Toggle Content
      </button>
      <div
        className={`transition-all duration-500 ease-in-out ${
          show
            ? "opacity-100 transform translate-y-0 max-h-[1000px]" // Visible state
            : "opacity-0 transform -translate-y-5 max-h-0" // Hidden state
        } overflow-hidden`}
      >
        <div className="p-4 bg-gray-100 rounded mt-3 shadow">
          <p>This is the toggled content!</p>
        </div>
      </div>
    </div>
  );
};

export default Test;
