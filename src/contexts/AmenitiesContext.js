import { createContext } from "react";
import useCheckbox from "../custom-hooks/useCheckbox";

const amenitiesContext = createContext();

export const AmenitiesContextProvider = function ({ children }) {
  const [hasAirCont, changeHasAirCont] = useCheckbox(randomBooleanFavorTrue());
  const [hasBalcony, changeHasBalcony] = useCheckbox(randomBooleanFavorTrue());
  const [hasBarbecue, changeHasBarbecue] = useCheckbox(
    randomBooleanFavorTrue()
  );
  const [hasBreakfast, changeHasBreakfast] = useCheckbox(
    randomBooleanFavorTrue()
  );
  const [hasCityView, changeHasCityView] = useCheckbox(
    randomBooleanFavorTrue()
  );
  const [hasEssentials, changeHasEssentials] = useCheckbox(
    randomBooleanFavorTrue()
  );
  const [hasDryer, changeHasDryer] = useCheckbox(randomBooleanFavorTrue());

  const [hasExtraBedware, changeHasExtraBedware] = useCheckbox(
    randomBooleanFavorTrue()
  );
  const [hasFireAlarm, changeHasFireAlarm] = useCheckbox(
    randomBooleanFavorTrue()
  );
  const [hasFireExtinguisher, changeHasFireExtinguisher] = useCheckbox(
    randomBooleanFavorTrue()
  );
  const [hasFirstAid, changeHasFirstAid] = useCheckbox(
    randomBooleanFavorTrue()
  );
  const [hasFreeParking, changeHasFreeParking] = useCheckbox(
    randomBooleanFavorTrue()
  );
  const [hasFridge, changeHasFridge] = useCheckbox(randomBooleanFavorTrue());
  const [hasGarden, changeHasGarden] = useCheckbox(randomBooleanFavorTrue());
  const [hasHairDryer, changeHasHairDryer] = useCheckbox(
    randomBooleanFavorTrue()
  );

  const [hasHotKettle, changeHasHotKettle] = useCheckbox(
    randomBooleanFavorTrue()
  );
  const [hasHotTub, changeHasHotTub] = useCheckbox(randomBooleanFavorTrue());
  const [hasHotWater, changeHasHotWater] = useCheckbox(
    randomBooleanFavorTrue()
  );
  const [hasIndoorFireplace, changeHasIndoorFireplace] = useCheckbox(
    randomBooleanFavorTrue()
  );
  const [hasKitchen, changeHasKitchen] = useCheckbox(randomBooleanFavorTrue());

  const [hasLongtermStay, changeHasLongtermStay] = useCheckbox(
    randomBooleanFavorTrue()
  );
  const [hasMosquitoNet, changeHasMosquitoNet] = useCheckbox(
    randomBooleanFavorTrue()
  );
  const [hasMountainView, changeHasMountainView] = useCheckbox(
    randomBooleanFavorTrue()
  );
  const [hasNearBeach, changeHasNearBeach] = useCheckbox(
    randomBooleanFavorTrue()
  );
  const [hasPets, changeHasPets] = useCheckbox(randomBooleanFavorTrue());

  const [hasPool, changeHasPool] = useCheckbox(randomBooleanFavorTrue());
  const [hasSafe, changeHasSafe] = useCheckbox(randomBooleanFavorTrue());
  const [hasSecurityCamera, changeHasSecurityCamera] = useCheckbox(
    randomBooleanFavorTrue()
  );
  const [hasSecurityStaff, changeHasSecurityStaff] = useCheckbox(
    randomBooleanFavorTrue()
  );
  const [hasSelfCheckin, changeHasSelfCheckin] = useCheckbox(
    randomBooleanFavorTrue()
  );

  const [hasShampoo, changeHasShampoo] = useCheckbox(randomBooleanFavorTrue());
  const [hasShowerGel, changeHasShowerGel] = useCheckbox(
    randomBooleanFavorTrue()
  );
  const [hasSmoking, changeHasSmoking] = useCheckbox(randomBooleanFavorTrue());
  const [hasTV, changeHasTV] = useCheckbox(randomBooleanFavorTrue());
  const [hasWasher, changeHasWasher] = useCheckbox(randomBooleanFavorTrue());

  const [hasWifi, changeHasWifi] = useCheckbox(randomBooleanFavorTrue());
  const [hasWorkspace, changeHasWorkspace] = useCheckbox(
    randomBooleanFavorTrue()
  );

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

function randomBooleanFavorTrue() {
  return Math.random() < 0.72 ? true : false;
}
