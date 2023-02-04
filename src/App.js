import RoomTypes from "./components//RoomTypes";
import HostInfo from "./components/HostInfo";
import AmenitiesSelect from "./components//AmenitiesSelect";
import TimeSelect from "./components//TimeSelect";
import FeaturesSelect from "./components//FeaturesSelect";
import RoomGeneralInfo from "./components//RoomGeneralInfo";
import { useContext } from "react";
import roomGeneralInfoContext from "./contexts/RoomGeneralInfoContext";
import amenitiesContext from "./contexts/AmenitiesContext";
import hostInfoContext from "./contexts/HostInfoContext";
import roomImagesContext from "./contexts/RoomImagesContext";
import MiscInfo from "./components/MiscInfo";
import miscInfoContext from "./contexts/MiscInfoContext";
import timeContext from "./contexts/TimeContext";
import room1Context from "./contexts/Room1InfoContext";
import room2Context from "./contexts/Room2InfoContext";
import entireHouseContext from "./contexts/EntireHouseInfoContext";
import featuresContext from "./contexts/FeaturesContext";

function App() {
  const {
    airCont: [hasAirCont],
    balcony: [hasBalcony],
    barbecue: [hasBarbecue],
    breakfast: [hasBreakfast],
    cityView: [hasCityView],
    dryer: [hasDryer],
    essentials: [hasEssentials],
    bedware: [hasExtraBedware],
    fireAlarm: [hasFireAlarm],
    fireExtinguisher: [hasFireExtinguisher],
    firstAid: [hasFirstAid],
    freeParking: [hasFreeParking],
    fridge: [hasFridge],
    garden: [hasGarden],
    hairDryer: [hasHairDryer],
    hotKettle: [hasHotKettle],
    hotTub: [hasHotTub],
    hotWater: [hasHotWater],
    indoorFireplace: [hasIndoorFireplace],
    kitchen: [hasKitchen],
    longtermStay: [hasLongtermStay],
    mosquitoNet: [hasMosquitoNet],
    mountainView: [hasMountainView],
    nearBeach: [hasNearBeach],
    pets: [hasPets],
    pool: [hasPool],
    safe: [hasSafe],
    securityCamera: [hasSecurityCamera],
    securityStaff: [hasSecurityStaff],
    selfCheckin: [hasSelfCheckin],
    shampoo: [hasShampoo],
    showerGel: [hasShowerGel],
    smoking: [hasSmoking],
    tv: [hasTV],
    washer: [hasWasher],
    wifi: [hasWifi],
    workspace: [hasWorkspace],
  } = useContext(amenitiesContext);

  const {
    lodgeName: [lodgeName],
    location: [location],
    city: [city],
    description: [description],
    languages: [languages],
  } = useContext(roomGeneralInfoContext);

  const {
    hostName: [hostName],
    hostEmail,
    hostPhone: [hostPhone],
    hostImage: [hostImage],
    hostDate: [hostDate],
  } = useContext(hostInfoContext);

  const {
    image1: [image1],
    image2: [image2],
    image3: [image3],
    image4: [image4],
    image5: [image5],
    image6: [image6],
  } = useContext(roomImagesContext);

  const {
    animals: [numOfAnimalsAllowed],
    babies: [numOfBabiesAllowed],
    prepayment: [prepayment],
    refund: [refund],
  } = useContext(miscInfoContext);

  const {
    checkinStart: [checkinStart],
    checkinEnd: [checkinEnd],
    checkoutBefore: [checkoutBefore],
  } = useContext(timeContext);

  const {
    room1Name: [room1Name],
    room1Price: [room1Price],
    room1Quantity: [room1Quantity],
    room1Bed: [room1Beds],
    room1Sleeps: [room1Sleeps],
    room1Type: [room1Type],
    room1Image: [room1Image],
  } = useContext(room1Context);

  const {
    room2Name: [room2Name],
    room2Price: [room2Price],
    room2Quantity: [room2Quantity],
    room2Bed: [room2Beds],
    room2Sleeps: [room2Sleeps],
    room2Type: [room2Type],
    room2Image: [room2Image],
  } = useContext(room2Context);

  const {
    entireHouseName: [entireHouseName],
    entireHousePrice: [entireHousePrice],
    entireHouseQuantity: [entireHouseQuantity],
    entireHouseBed: [entireHouseBeds],
    entireHouseSleeps: [entireHouseSleeps],
    entireHouseType: [entireHouseType],
    entireHouseImage: [entireHouseImage],
  } = useContext(entireHouseContext);

  const {
    amazingView: [isAmazingView],
    beachView: [isBeachView],
    camp: [isCamp],
    cold: [isCold],
    countryside: [isCountryside],
    design: [isDesign],
    farmhouse: [isFarmHouse],
    handicapped: [isHandicapped],
    new: [isNew],
    pool: [isPool],
    tinyHouse: [isTinyHouse],
    trending: [isTrending],
    tropical: [isTropical],
    villa: [isVilla],
  } = useContext(featuresContext);

  const handleSubmitInfo = function (event) {
    event.preventDefault();

    const data = {
      amenities: {
        hasAirCont,
        hasBalcony,
        hasBarbecue,
        hasBreakfast,
        hasCityView,
        hasDryer,
        hasEssentials,
        hasExtraBedware,
        hasFireAlarm,
        hasFireExtinguisher,
        hasFirstAid,
        hasFreeParking,
        hasFridge,
        hasGarden,
        hasHairDryer,
        hasHotKettle,
        hasHotTub,
        hasHotWater,
        hasIndoorFireplace,
        hasKitchen,
        hasLongtermStay,
        hasMosquitoNet,
        hasMountainView,
        hasNearBeach,
        hasPets,
        hasPool,
        hasSafe,
        hasSecurityCamera,
        hasSecurityStaff,
        hasSelfCheckin,
        hasShampoo,
        hasShowerGel,
        hasSmoking,
        hasTV,
        hasWasher,
        hasWifi,
        hasWorkspace,
      },
      features: {
        isAmazingView,
        isBeachView,
        isCamp,
        isCold,
        isCountryside,
        isDesign,
        isFarmHouse,
        isHandicapped,
        isNew,
        isPool,
        isTinyHouse,
        isTrending,
        isTropical,
        isVilla,
      },
      city,
      description,
      host: {
        img: hostImage,
        joinedDate: hostDate,
        email: hostEmail,
        name: hostName,
        phone: hostPhone,
      },
      images: [image1, image2, image3, image4, image5, image6],
      languages: languages.split(", "),
      location,
      name: lodgeName,
      numOfAnimalsAllowed,
      numOfBabiesAllowed,
      prepayment,
      refund,
      reviews: generateRandomReviews(),
      time: {
        checkinEnd,
        checkinStart,
        checkoutBefore,
      },
      types: [
        {
          name: room1Name,
          price: room1Price,
          quantity: room1Quantity,
          bed: room1Beds,
          sleeps: room1Sleeps,
          type: room1Type,
          image: room1Image,
        },
        {
          name: room2Name,
          price: room2Price,
          quantity: room2Quantity,
          bed: room2Beds,
          sleeps: room2Sleeps,
          type: room2Type,
          image: room2Image,
        },
        {
          name: entireHouseName,
          price: entireHousePrice,
          quantity: entireHouseQuantity,
          bed: entireHouseBeds,
          sleeps: entireHouseSleeps,
          type: entireHouseType,
          image: entireHouseImage,
        },
      ],
    };

    fetch(
      `https://stayfy-d4fc1-default-rtdb.asia-southeast1.firebasedatabase.app/lodges.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <div className="page">
      <RoomGeneralInfo />
      <MiscInfo />
      <RoomTypes />
      <HostInfo />
      <AmenitiesSelect />
      <FeaturesSelect />
      <TimeSelect />
      <button type="button">SUBMIT LODGE</button>
    </div>
  );
}

export default App;

function generateRandomReviews() {
  const reviews = [];
  const numOfReviews = Math.ceil(Math.random() * 7) + 15;
  for (let i = 0; i < numOfReviews; i++) {
    const randomReview = (Math.random() * 3 + 6.8).toFixed(2);
    reviews.push(randomReview);
  }

  return reviews;
}
