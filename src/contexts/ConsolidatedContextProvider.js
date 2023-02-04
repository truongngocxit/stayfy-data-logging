import { RoomGeneralInfoContextProvider } from "./RoomGeneralInfoContext";
import { Room1ContextProvider } from "./Room1InfoContext";
import { Room2ContextProvider } from "./Room2InfoContext.js";
import { EntireHouseContextProvider } from "./EntireHouseInfoContext";
import { HostInfoContextProvider } from "./HostInfoContext";
import { AmenitiesContextProvider } from "./AmenitiesContext";
import { FeaturesContextProvider } from "./FeaturesContext";
import { TimeContextProvider } from "./TimeContext";
import { RoomImagesContextProvider } from "./RoomImagesContext";
import { MiscInfoContextProvider } from "./MiscInfoContext";

const ConsolidatedContextProvider = function ({ children }) {
  return (
    <RoomGeneralInfoContextProvider>
      <Room1ContextProvider>
        <Room2ContextProvider>
          <EntireHouseContextProvider>
            <HostInfoContextProvider>
              <AmenitiesContextProvider>
                <FeaturesContextProvider>
                  <TimeContextProvider>
                    <RoomImagesContextProvider>
                      <MiscInfoContextProvider>
                        {children}
                      </MiscInfoContextProvider>
                    </RoomImagesContextProvider>
                  </TimeContextProvider>
                </FeaturesContextProvider>
              </AmenitiesContextProvider>
            </HostInfoContextProvider>
          </EntireHouseContextProvider>
        </Room2ContextProvider>
      </Room1ContextProvider>
    </RoomGeneralInfoContextProvider>
  );
};

export default ConsolidatedContextProvider;
