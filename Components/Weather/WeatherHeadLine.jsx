import { useContext } from "react";
import PinIcon from "../../template/assets/pin.svg"
import {WeatherContext} from "../../src/context";
import {getDateTime} from "../../src/utils/dateTime";

import sunnyIcon from "../../template/assets/sun.svg"
import thunderIcon from "../../template/assets/thunder.svg"
import rainyIcon from "../../template/assets/rainy.svg"
import cloudyIcon from "../../template/assets/cloud.svg"
import hazeIcon from "../../template/assets/haze.svg"
import haze2Icon from "../../template/assets/haze.png"
import snowIcon from "../../template/icons/snow.svg"
import windIcon from "../../template/icons/wind.svg"

export default function WeatherHeadline(){

    const {weatherData}=useContext(WeatherContext)

    const{ temperature,climate,location,time}=weatherData


    const getClimateIcon=(climate)=>{
 
        switch (climate) {
            case "Clear":
                return sunnyIcon;
            case "Rain":
                return rainyIcon;
            case "Snow":
                return snowIcon
            case "Clouds":
                return cloudyIcon
            case "Thunder":
                return thunderIcon
            case "Fog":
                return cloudyIcon
            case "Mist":
                return haze2Icon
            case "Haze":
                return hazeIcon
            case "Wind":
                return windIcon
                
                

        
            default:
                return sunnyIcon
        }
    }
    
    return (
        <div>
							<div className="max-md:flex items-center justify-between md:-mt-10">
								<img src={getClimateIcon(climate)} alt="climate" />
								<div className="max-md:flex items-center max-md:space-x-4">
									<h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">{Math.round(temperature)}°</h1>
									<div className="flex items-center space-x-4 md:mb-4">
										<img src={PinIcon} />
										<h2 className="text-2xl lg:text-[50px]">{location}</h2>
									</div>
								</div>
							</div>
							<p className="text-sm lg:text-lg">{getDateTime(time,"time",false)} - {getDateTime(time,"date",false)}</p>
						</div>
    );
}