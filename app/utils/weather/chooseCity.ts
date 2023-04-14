import { SetStateAction } from "react";

// function to handle choosing city option
const chooseCity = (
  setOpt: (value: SetStateAction<string>) => void,
  setLatLon: (value: SetStateAction<boolean>) => void,
  setCity: (value: SetStateAction<boolean>) => void,
  setCountry: (value: SetStateAction<boolean>) => void
) => {
  setOpt("city")
  setLatLon(false)
  setCity(true)
  setCountry(false)
}

export default chooseCity