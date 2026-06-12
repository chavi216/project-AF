import FlightForm from './components/FlightForm';
import FlightDashboard from './components/FlightDashboard';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Flight Monitor System</h1>
      </header>
      <main>
        <FlightForm />
        <FlightDashboard />
      </main>
    </div>
  );
}

export default App;