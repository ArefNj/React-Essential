import "./App.css";

function Hello(text) {
  return <p>Hello {text.name} this is React!</p>;
}

function App() {
  return (
    <div>
      <Hello name="Ali"></Hello>
      <Hello name="Gholy"></Hello>
      <Hello name="Dapsh"></Hello>
    </div>
  );
}

export default App;
