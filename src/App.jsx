import Page from "../Components/Page";
import { FavouriteProvider, LocationProvider } from "../src/provider";
import WeatherProvider from "../src/provider/WeatherProvider";

export default function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}
