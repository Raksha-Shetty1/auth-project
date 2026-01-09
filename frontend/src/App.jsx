import { useState } from "react";
import Signup from "./pages/SignUp";
import Login from "./pages/login";

function App() {
  const [page, setPage] = useState("signup");

  return (
    <div>
      <div className="flex justify-center gap-4 mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setPage("signup")}
        >
          Signup
        </button>

        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setPage("login")}
        >
          Login
        </button>
      </div>

      {page === "signup" ? <Signup /> : <Login />}
    </div>
  );
}

export default App;
