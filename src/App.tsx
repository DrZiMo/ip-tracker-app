import { Toaster } from "react-hot-toast";
import InfoPart from "./components/InfoPart";
import MapPart from "./components/MapPart";
import SearchPart from "./components/SearchPart";
import "leaflet/dist/leaflet.css";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="relative search-part-container min-h-[300px]">
        <div className="absolute w-full p-10 flex flex-col gap-y-5 md:gap-y-15">
          <SearchPart />
          <InfoPart />
        </div>
      </div>
      <MapPart />
      <Toaster />
    </div>
  );
};

export default App;
