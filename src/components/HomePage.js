import React, { useState } from "react";
import Tasks from "./Tasks/Tasks";
import AddTask from "./AddTask/AddTask";
import { TaskProvider } from "./context/TaskContext";
import PopUp from "./PopUp/PopUp";
import OverLay from "./OverLay/OverLay";
import RegisterPage from "./RegisterPage";
function HomePage() {
  const [Registerlog, setRegisterlog] = useState("true");
    function logout(){
      localStorage.clear();
      alert("Thank You !");
      setRegisterlog(!Registerlog);
    }
  return (
    <div>{Registerlog ? ( <div>
    <TaskProvider>
      <div class="border border-primary border-3 rounded py-4">
        <div class="border text-center text-uppercase fs-2 py-4 border-bottom">
          <h2>Dashboard</h2>
            <button
              class="btn btn-danger dropdown-toggle"
              type="button"
              onClick={logout}
            >
              Logout
            </button>
        </div>
        <PopUp />
        <OverLay />
        <div className="container">
          <AddTask />
          <Tasks />
        </div>
      </div>
    </TaskProvider></div>
    ):(
      <RegisterPage />
    )}
    </div>
  );
}

export default HomePage;
