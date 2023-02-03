import { useState } from "react";

export default function useModal() {
  const [modalIsShown, setModalIsShown] = useState(false);

  const handleOpenModal = function () {
    setModalIsShown(true);
  };

  const handleCloseModal = function () {
    setModalIsShown(false);
  };

  return [modalIsShown, handleOpenModal, handleCloseModal];
}
