import Header from "./components/Header/Header";
import { TaskProvider } from "./components/context/TaskContext";
import PopUp from "./components/PopUp/PopUp";
import OverLay from "./components/OverLay/OverLay";
import "react-toastify/dist/ReactToastify.css";
import "./components/Styles/bootstrap.min.css";
import RegisterPage from "./components/RegisterPage";
const App = () => {
  return (
    <TaskProvider>
      <PopUp />
      <OverLay />
      <Header />
      <div>
        <RegisterPage />
      </div>
    </TaskProvider>
  );
};
export default App;
