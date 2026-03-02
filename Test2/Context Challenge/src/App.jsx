import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useContext, useState } from "react";
import { ImageSizeContext } from "./ImageSizeContext ";
import { places } from "./Data";
import { getImageUrl } from "./utils";

function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  const imageContextSize = useContext(ImageSizeContext);
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <ImageSizeContext.Provider value={{ imageSize }}>
        <List imageSize={imageSize} />
      </ImageSizeContext.Provider>
    </>
  );
}

function List({ imageSize }) {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place} imageSize={imageSize} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}
function Place({ place, imageSize }) {
  return (
    <>
      <PlaceImage place={place} imageSize={imageSize} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place, imageSize }) {
  const vv = useContext(ImageSizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={vv.imageSize}
      height={vv.imageSize}
    />
  );
}
export default App;
