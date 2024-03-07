import { useEffect, useState } from "react";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  useEffect(() => {
    localStorage.setItem("mode", mode);
  });

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  return (
    <>
      <div
        className={`hero min-h-[100vh] flex justify-center align-middle ${mode}`}
      >
        <div
          className={`card w-96 ${
            mode === "light" ? "bg-base-100" : "bg-slate-700"
          } shadow-xl`}
        >
          <h1 className="text-3xl font-bold mb-4 text-center">
            {" "}
            <input
              type="checkbox"
              className="toggle"
              onClick={toggleMode}
              checked={mode === "dark"}
            />{" "}
            Toggle Theme
          </h1>
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
