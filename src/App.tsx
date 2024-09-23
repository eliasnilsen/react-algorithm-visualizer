import Grid from "./components/Grid";
import { SpeedContextProvider } from "./contexts/SpeedContext";
import { TileContextProvider } from "./contexts/TileContext";
import Header from "./components/Header";

function App() {
  return (
    <TileContextProvider>
      <SpeedContextProvider>
        <div className="h-screen w-full bg-antiflashWhite">
          <Header />
          <Grid />
        </div>
      </SpeedContextProvider>
    </TileContextProvider>
  );
}

export default App;
