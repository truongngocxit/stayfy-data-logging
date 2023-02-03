import { createContext } from "react";
import useInput from "../custom-hooks/useInput";

const amenitiesContext = createContext();

export const AmenitiesContextProvider = function ({ children }) {
  const [hasAirCont, changeHasAirCont] = useInput(true);
  const [hasBalcony, changeHasBalcony] = useInput(true);
  const [hasBarbecue, changeHasBarbecue] = useInput(true);
  const [hasBreakfast, changeHasBreakfast] = useInput(true);
  const [hasCityView, changeHasCityView] = useInput(true);
  const [hasEssentials, changeHasEssentials] = useInput(true);
  const [hasDryer, changeHasDryer] = useInput(true);

  const [hasExtraBedware, changeHasExtraBedware] = useInput(true);
  const [hasFireAlarm, changeHasFireAlarm] = useInput(true);
  const [hasFireExtinguisher, changeHasFireExtinguisher] = useInput(true);
  const [hasFirstAid, changeHasFirstAid] = useInput(true);
  const [hasFreeParking, changeHasFreeParking] = useInput(true);
  const [hasFridge, changeHasFridge] = useInput(true);
  const [hasGarden, changeHasGarden] = useInput(true);
  const [hasHairDryer, changeHasHairDryer] = useInput(true);

  const [hasHotKettle, changeHasHotKettle] = useInput(true);
  const [hasHotTub, changeHasHotTub] = useInput(true);
  const [hasHotWater, changeHasHotWater] = useInput(true);
  const [hasIndoorFireplace, changeHasIndoorFireplace] = useInput(true);
  const [hasKitchen, changeHasKitchen] = useInput(true);

  const [hasLongtermStay, changeHasLongtermStay] = useInput(true);
  const [hasMosquitoNet, changeHasMosquitoNet] = useInput(true);
  const [hasMountainView, changeHasMountainView] = useInput(true);
  const [hasNearBeach, changeHasNearBeach] = useInput(true);
  const [hasPets, changeHasPets] = useInput(true);

  const [hasPool, changeHasPool] = useInput(true);
  const [hasSafe, changeHasSafe] = useInput(true);
  const [hasSecurityCamera, changeHasSecurityCamera] = useInput(true);
  const [hasSecurityStaff, changeHasSecurityStaff] = useInput(true);
  const [hasSelfCheckin, changeHasSelfCheckin] = useInput(true);

  const [hasShampoo, changeHasShampoo] = useInput(true);
  const [hasShowerGel, changeHasShowerGel] = useInput(true);
  const [hasSmoking, changeHasSmoking] = useInput(true);
  const [hasTV, changeHasTV] = useInput(true);
  const [hasWasher, changeHasWasher] = useInput(true);

  const [hasWifi, changeHasWifi] = useInput(true);
  const [hasWorkspace, changeHasWorkspace] = useInput(true);

  return (
    <amenitiesContext.Provider
      value={{
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
      }}
    >
      {children}
    </amenitiesContext.Provider>
  );
};

export default amenitiesContext;
