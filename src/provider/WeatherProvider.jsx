import { WeatherContext } from "../context"
import { useWeather } from "../Hooks"



const WeatherProvider=({children})=>{

    const {weatherData,loading,error}=useWeather()

    return(
    
       <WeatherContext.Provider value={{
        weatherData,loading,error

    }} >
    {children}
    </WeatherContext.Provider>
       
    )
}

export default WeatherProvider