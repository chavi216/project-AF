import { useState } from 'react';
import DisplayControls from './components/DisplayControls';
import FlightDataDialog from './components/FlightDataDialog';
import FlightDashboard from './components/FlightDashboard';
import { type DisplayMode } from './types/flight';
import './App.css';

function App() {
  const [mode, setMode] = useState<DisplayMode>('visual');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSaved = () => {
    setIsDialogOpen(false);
    setRefreshKey((key) => key + 1);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Flight Monitor System</h1>
        <DisplayControls mode={mode} onModeChange={setMode} onAddData={() => setIsDialogOpen(true)} />
      </header>
      <main>
        <FlightDashboard mode={mode} refreshKey={refreshKey} />
      </main>

      <FlightDataDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} onSaved={handleSaved} />
    </div>
  );
}

export default App;
