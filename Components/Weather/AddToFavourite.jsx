import { useContext, useEffect, useState } from "react";
import HeartIcon from "../../template/assets/heart.svg"
import RedHeartIcon from "../../template/assets/heart-red.svg"
import { FavouriteContext,WeatherContext } from "../../src/context";

export default function AddToFavourite(){
	const {
        addToFavourites,
        removeFavourites,
        favourites,
      }=useContext(FavouriteContext)

	  const {weatherData}=useContext(WeatherContext)
	  const {latitude,longitude,location}=weatherData

	  const [isFavourite,setIsFavourite]=useState(false)

	  useEffect(()=>{

		const found= favourites.find(fav=> fav.location === location)
		setIsFavourite(found)

	  },[])

	  const handleClickFavourite=()=>{
		setIsFavourite(!isFavourite)
		const found= favourites.find(fav=> fav.location === location)
  

		if (!found) {
			addToFavourites(latitude,longitude,location)
		}else{
			removeFavourites(location)
		}

		
	  }

	  

    return (
        <div className="md:col-span-2">
							<div className="flex items-center justify-end space-x-6">
								<button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
								onClick={handleClickFavourite}
								>
									<span>Add to Favourite</span>
									<img src={isFavourite ? RedHeartIcon:HeartIcon} alt="ToggleIcon" />
								</button>
								
							</div>
						</div>
    );
}