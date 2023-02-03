import InputGroup from "./InputGroup";
import Checkbox from "./Checkbox";
import { useContext } from "react";
import amenitiesContext from "../contexts/AmenitiesContext";

export default function AmenitiesSelect() {
  const {
    airCont: [hasAirCont, changeHasAirCont],
    balcony: [hasBalcony, changeHasBalcony],
    barbecue: [hasBarbecue, changeHasBarbecue],
    breakfast: [hasBreakfast, changeHasBreakfast],
    cityView: [hasCityView, changeHasCityView],
    dryer: [hasDryer, changeHasDryer],
    essentials: [hasEssentials, changeHasEssentials],
    bedware: [hasExtraBedware, changeHasExtraBedware],
    fireAlarm: [hasFireAlarm, changeHasFireAlarm],
    fireExtinguisher: [hasFireExtinguisher, changeHasFireExtinguisher],
    firstAid: [hasFirstAid, changeHasFirstAid],
    freeParking: [hasFreeParking, changeHasFreeParking],
    fridge: [hasFridge, changeHasFridge],
    garden: [hasGarden, changeHasGarden],
    hairDryer: [hasHairDryer, changeHasHairDryer],
    hotKettle: [hasHotKettle, changeHasHotKettle],
    hotTub: [hasHotTub, changeHasHotTub],
    hotWater: [hasHotWater, changeHasHotWater],
    indoorFireplace: [hasIndoorFireplace, changeHasIndoorFireplace],
    kitchen: [hasKitchen, changeHasKitchen],
    longtermStay: [hasLongtermStay, changeHasLongtermStay],
    mosquitoNet: [hasMosquitoNet, changeHasMosquitoNet],
    mountainView: [hasMountainView, changeHasMountainView],
    nearBeach: [hasNearBeach, changeHasNearBeach],
    pets: [hasPets, changeHasPets],
    pool: [hasPool, changeHasPool],
    safe: [hasSafe, changeHasSafe],
    securityCamera: [hasSecurityCamera, changeHasSecurityCamera],
    securityStaff: [hasSecurityStaff, changeHasSecurityStaff],
    selfCheckin: [hasSelfCheckin, changeHasSelfCheckin],
    shampoo: [hasShampoo, changeHasShampoo],
    showerGel: [hasShowerGel, changeHasShowerGel],
    smoking: [hasSmoking, changeHasSmoking],
    tv: [hasTV, changeHasTV],
    washer: [hasWasher, changeHasWasher],
    wifi: [hasWifi, changeHasWifi],
    workspace: [hasWorkspace, changeHasWorkspace],
  } = useContext(amenitiesContext);
  return (
    <InputGroup heading="Room amenities" className="amenities-select">
      <Checkbox
        label="Air Conditioning"
        value={hasAirCont}
        onChange={changeHasAirCont}
      />
      <Checkbox
        label="Balcony"
        value={hasBalcony}
        onChange={changeHasBalcony}
      />
      <Checkbox
        label="Barbecue"
        value={hasBarbecue}
        onChange={changeHasBarbecue}
      />
      <Checkbox
        label="Breakfast"
        value={hasBreakfast}
        onChange={changeHasBreakfast}
      />
      <Checkbox
        label="City View"
        value={hasCityView}
        onChange={changeHasCityView}
      />
      <Checkbox label="Dryer" value={hasDryer} onChange={changeHasDryer} />
      <Checkbox
        label="Essentials"
        value={hasEssentials}
        onChange={changeHasEssentials}
      />
      <Checkbox
        label="Extra bedware"
        value={hasExtraBedware}
        onChange={changeHasExtraBedware}
      />
      <Checkbox
        label="Fire Alarm"
        value={hasFireAlarm}
        onChange={changeHasFireAlarm}
      />
      <Checkbox
        label="Fire extinguisher"
        value={hasFireExtinguisher}
        onChange={changeHasFireExtinguisher}
      />
      <Checkbox
        label="First Aid Kit"
        value={hasFirstAid}
        onChange={changeHasFirstAid}
      />
      <Checkbox
        label="Free Parking"
        value={hasFreeParking}
        onChange={changeHasFreeParking}
      />
      <Checkbox label="Fridge" value={hasFridge} onChange={changeHasFridge} />
      <Checkbox label="Garden" value={hasGarden} onChange={changeHasGarden} />
      <Checkbox
        label="Hair Dryer"
        value={hasHairDryer}
        onChange={changeHasHairDryer}
      />
      <Checkbox
        label="Hot Kettle"
        value={hasHotKettle}
        onChange={changeHasHotKettle}
      />
      <Checkbox label="Hot Tub" value={hasHotTub} onChange={changeHasHotTub} />
      <Checkbox
        label="Hot Water"
        value={hasHotWater}
        onChange={changeHasHotWater}
      />
      <Checkbox
        label="Indoor Fireplace"
        value={hasIndoorFireplace}
        onChange={changeHasIndoorFireplace}
      />
      <Checkbox
        label="Kitchen"
        value={hasKitchen}
        onChange={changeHasKitchen}
      />
      <Checkbox
        label="Long-term stay"
        value={hasLongtermStay}
        onChange={changeHasLongtermStay}
      />
      <Checkbox
        label="Mosquito net"
        value={hasMosquitoNet}
        onChange={changeHasMosquitoNet}
      />
      <Checkbox
        label="Mountain view"
        value={hasMountainView}
        onChange={changeHasMountainView}
      />
      <Checkbox
        label="Near beach"
        value={hasNearBeach}
        onChange={changeHasNearBeach}
      />
      <Checkbox label="Pets" value={hasPets} onChange={changeHasPets} />
      <Checkbox label="Pool" value={hasPool} onChange={changeHasPool} />
      <Checkbox label="Safe" value={hasSafe} onChange={changeHasSafe} />
      <Checkbox
        label="Security Camera"
        value={hasSecurityCamera}
        onChange={changeHasSecurityCamera}
      />
      <Checkbox
        label="Security Staff"
        value={hasSecurityStaff}
        onChange={changeHasSecurityStaff}
      />
      <Checkbox
        label="Self checkin"
        value={hasSelfCheckin}
        onChange={changeHasSelfCheckin}
      />
      <Checkbox
        label="Shampoo"
        value={hasShampoo}
        onChange={changeHasShampoo}
      />
      <Checkbox
        label="Shower gel"
        value={hasShowerGel}
        onChange={changeHasShowerGel}
      />
      <Checkbox
        label="Smoking"
        value={hasSmoking}
        onChange={changeHasSmoking}
      />
      <Checkbox label="TV" value={hasTV} onChange={changeHasTV} />
      <Checkbox label="Washer" value={hasWasher} onChange={changeHasWasher} />
      <Checkbox label="Wifi" value={hasWifi} onChange={changeHasWifi} />
      <Checkbox
        label="Workspace"
        value={hasWorkspace}
        onChange={changeHasWorkspace}
      />
    </InputGroup>
  );
}
