import { useState, useEffect } from "react";

const DogPics = () => {
  const [dogPicture, setDogPicture] = useState("");

  const getDogPicture = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const doggie = await response.json();
    return doggie.message;
  };

  useEffect(() => {
    getDogPicture().then((picture) => setDogPicture(picture));
  }, []);

  return (
    <div>
      <img src={dogPicture} width="600" height="510" alt="dogpic" />
      <br />
      <button
        className="dog-button"
        onClick={async (event) => setDogPicture(await getDogPicture())}
      >
        Click for another dog
      </button>
    </div>
  );
};

export default DogPics;
