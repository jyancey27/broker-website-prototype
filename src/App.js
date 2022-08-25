import './App.css';
import Axios from "axios";

function App() {

  const getTicket = () => {
    Axios.get("http://localhost:3000/getTicket").then((response) => {
      console.log(response)
    });
  }

  return (
    <div className="App">
      <h1>Test Submit and get on console</h1>

      <div>
        <button onClick={getTicket}>Get Tickets</button>
      </div>
    </div>
  );
}

export default App;
