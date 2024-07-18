import "./App.css";
import Hello from "./components/Hello";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Hello name="Ali"></Hello>
      <Hello name="Gholy"></Hello>
      <Hello name="Dapsh"></Hello>
      <Button> Click Me! </Button>
    </div>
  );
}

export default App;
