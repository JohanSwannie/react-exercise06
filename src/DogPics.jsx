import { useState } from "react";

const DogPics = () => {
  const [dogPicture, setDogPicture] = useState(
    "https://images.dog.ceo/breeds/buhund-norwegian/hakon1.jpg"
  );

  const getDogPicture = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const doggie = await response.json();
    return doggie.message;
  };

  return (
    <div>
      <img src={dogPicture} width="700" height="510" alt="dogpic" />
      <br />
      <button
        className="dog-button"
        onClick={async () => setDogPicture(await getDogPicture())}
      >
        Click for another dog
      </button>
    </div>
  );
};

export default DogPics;
