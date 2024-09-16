import { FavouriteContext } from "../context";
import { useLocalStorage } from "../Hooks";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourites = (latitude, longitude, location) => {
    setFavourites([...favourites,
         {
      latitude: latitude,
      longitude: longitude,
      location: location,
    }]);
  };
  const removeFavourites = (location) => {
    const restFavourites = favourites.filter((f) => f.location !== location);

    setFavourites(restFavourites);
  };

  return (
    <FavouriteContext.Provider
      value={{
        addToFavourites,
        removeFavourites,
        favourites,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};


export default FavouriteProvider