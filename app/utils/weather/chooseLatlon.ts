import { SetStateAction } from "react";

// function to handle choosing lat lon option
const chooseLatLon = (
  setOpt: (value: SetStateAction<string>) => void,
  setLatLon: (value: SetStateAction<boolean>) => void,
  setCity: (value: SetStateAction<boolean>) => void,
  setCountry: (value: SetStateAction<boolean>) => void
) => {
  setOpt("latlon")
  setLatLon(true)
  setCity(false)
  setCountry(false)
}

export default chooseLatLon