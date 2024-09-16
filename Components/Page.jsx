import { WeatherContext } from "../src/context";
import Header from "./Header/Header";
import WeatherBoard from "./Weather/WeatherBoard";
import { useContext, useEffect, useState } from "react";
import ClearImage from "../template/background/clear-sky.jpg";
import CloudsImage from "../template/background/few-clouds.jpg";
import ScatteredImage from "../template/background/scattered-clouds.jpg";
import RainyImage from "../template/background/rainy-day.jpg";
import ShowerImage from "../template/background/shower-rain.jpg";
import SnowImage from "../template/background/snow.jpg";
import SunnyImage from "../template/background/sunny.jpg";
import thunderstormImage from "../template/background/thunderstorm.jpg";
import winterImage from "../template/background/winter.jpg";

export default function Page() {
  const { loading, weatherData } = useContext(WeatherContext);

  const { climate } = weatherData;

  const [climateImage, setClimateImage] = useState("");

  const getClimateImage = (climate) => {
    switch (climate) {
      case "Clear":
        return ClearImage;
      case "Rain":
        return RainyImage;
      case "Snow":
        return SnowImage;
      case "Clouds":
        return CloudsImage;
      case "Thunder":
        return thunderstormImage;
      case "Fog":
        return ShowerImage;
      case "Mist":
        return SunnyImage;
      case "Haze":
        return ScatteredImage;
      case "Wind":
        return winterImage;
      default:
        return SunnyImage;
    }
  };

  useEffect(() => {
    const bgImage = getClimateImage(climate);
    setClimateImage(bgImage);
  }, [climate]);

  return (
    <>
      {loading.state ? (
        <div className="flex bg-gray-200 rounded-md w-96 mt-14 mx-auto">
          <p className="text-center text-3xl text-black">{loading.message} </p>
        </div>
      ) : (
        <div
          style={{
            backgroundImage: `url("${climateImage}")`,
          }}
          className="grid place-items-center h-screen bg-no-repeat bg-cover"
        >
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
