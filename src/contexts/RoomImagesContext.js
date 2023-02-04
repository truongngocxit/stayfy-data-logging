import { createContext } from "react";
import useInput from "../custom-hooks/useInput";

const roomImagesContext = createContext();

export const RoomImagesContextProvider = function ({ children }) {
  const [image1, changeImage1, resetImage1] = useInput("");
  const [image2, changeImage2, resetImage2] = useInput("");
  const [image3, changeImage3, resetImage3] = useInput("");
  const [image4, changeImage4, resetImage4] = useInput("");
  const [image5, changeImage5, resetImage5] = useInput("");
  const [image6, changeImage6, resetImage6] = useInput("");

  return (
    <roomImagesContext.Provider
      value={{
        image1: [image1, changeImage1, resetImage1],
        image2: [image2, changeImage2, resetImage2],
        image3: [image3, changeImage3, resetImage3],
        image4: [image4, changeImage4, resetImage4],
        image5: [image5, changeImage5, resetImage5],
        image6: [image6, changeImage6, resetImage6],
      }}
    >
      {children}
    </roomImagesContext.Provider>
  );
};

export default roomImagesContext;
