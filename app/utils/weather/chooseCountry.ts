import { SetStateAction } from "react";

// function to handle choosing country option
const chooseCountry = (
  setOpt: (value: SetStateAction<string>) => void,
  setLatLon: (value: SetStateAction<boolean>) => void,
  setCity: (value: SetStateAction<boolean>) => void,
  setCountry: (value: SetStateAction<boolean>) => void
) => {
  setOpt("country")
  setLatLon(false)
  setCity(false)
  setCountry(true)
}

export default chooseCountry