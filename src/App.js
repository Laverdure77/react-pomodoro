import Plus from "./Plus";
import Start from "./Start";
import Timer from "./Timer";
import './app.css';

export function App() {
    return (
      <div className="container">
        <h1>Pomodoro Timer</h1>
        <Timer />
        <div className="btn">
        <Start />
        <Plus />
        </div>
      </div>
    );
  }