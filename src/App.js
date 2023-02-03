import RoomTypes from "./components//RoomTypes";
import HostInfo from "./components/HostInfo";
import AmenitiesSelect from "./components//AmenitiesSelect";
import TimeSelect from "./components//TimeSelect";
import FeaturesSelect from "./components//FeaturesSelect";
import RoomGeneralInfo from "./components//RoomGeneralInfo";

function App() {
  return (
    <div className="page">
      <RoomGeneralInfo />
      <RoomTypes />
      <HostInfo />
      <AmenitiesSelect />
      <FeaturesSelect />
      <TimeSelect />
    </div>
  );
}

export default App;
