import { useState } from "react"
import { LocationContext } from "../context"



const LocationProvider=({children})=>{

const [selectedLocation,setSelectedLocation]=useState({
    "location_code": "",
    "latitude":0,
    "longitude": 0,
    "location": "",
  })

    return(
        <LocationContext.Provider value={{
            selectedLocation,setSelectedLocation
        }}>
            {children}
        </LocationContext.Provider>
    )

}

export default LocationProvider