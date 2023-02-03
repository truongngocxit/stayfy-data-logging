import InputGroup from "./InputGroup";
import Checkbox from "./Checkbox";
import { useContext } from "react";
import featuresContext from "../contexts/FeaturesContext";

export default function FeaturesSelect() {
  const {
    amazingView: [isAmazingView, changeIsAmazingView],
    beachView: [isBeachView, changeIsBeachView],
    camp: [isCamp, changeIsCamp],
    cold: [isCold, changeIsCold],
    countryside: [isCountryside, changeIsCountryside],
    design: [isDesign, changeIsDesign],
    farmhouse: [isFarmHouse, changeIsFarmHouse],
    handicapped: [isHandicapped, changeIsHandicapped],
    new: [isNew, changeIsNew],
    pool: [isPool, changeIsPool],
    tinyHouse: [isTinyHouse, changeIsTinyHouse],
    trending: [isTrending, changeIsTrending],
    tropical: [isTropical, changeIsTropical],
    villa: [isVilla, changeIsVilla],
  } = useContext(featuresContext);
  return (
    <InputGroup heading="Room Features" className="amenities-select">
      <Checkbox
        label="Amazing views"
        value={isAmazingView}
        onChange={changeIsAmazingView}
      />
      <Checkbox
        label="Beach views"
        value={isBeachView}
        onChange={changeIsBeachView}
      />
      <Checkbox label="Camp" value={isCamp} onChange={changeIsCamp} />
      <Checkbox label="Cold" value={isCold} onChange={changeIsCold} />
      <Checkbox
        label="Countryside"
        value={isCountryside}
        onChange={changeIsCountryside}
      />
      <Checkbox label="Design" value={isDesign} onChange={changeIsDesign} />
      <Checkbox
        label="Farm house"
        value={isFarmHouse}
        onChange={changeIsFarmHouse}
      />
      <Checkbox
        label="Handicapped"
        value={isHandicapped}
        onChange={changeIsHandicapped}
      />
      <Checkbox label="New" value={isNew} onChange={changeIsNew} />
      <Checkbox label="Pool" value={isPool} onChange={changeIsPool} />
      <Checkbox
        label="Tiny house"
        value={isTinyHouse}
        onChange={changeIsTinyHouse}
      />
      <Checkbox
        label="Trending"
        value={isTrending}
        onChange={changeIsTrending}
      />
      <Checkbox
        label="Tropical"
        value={isTropical}
        onChange={changeIsTropical}
      />
      <Checkbox label="Villa" value={isVilla} onChange={changeIsVilla} />
    </InputGroup>
  );
}
