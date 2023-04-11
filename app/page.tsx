'use client'

import { useState } from "react";
import Container from "./components/Container";
import Input from "./components/Input";
import useComponentDisabler from "./hooks/useComponentDisabler";
import Button from "./components/Button";
import { FaSearchLocation } from "react-icons/fa"

export default function Home() {
  // state for option choosen
  const [opt, setOpt] = useState("")
  const [latLon, setLatlon] = useState(false)
  const [city, setCity] = useState(false)
  const [country, setCountry] = useState(false)

  // state for input search bar value
  const [search, setSearch] = useState("")

  // state for input & button search visibility
  const [disabledButton, setDisabledButton] = useState(true)
  const [disabledInput, setDisabledInput] = useState(true)

  // disable input field when option not choosen
  useComponentDisabler(setDisabledInput, opt)

  // disable search button when input field empty
  useComponentDisabler(setDisabledButton, search)

  // functions to handle choosing option
  const chooseLatLon = () => {
    setOpt("latlon")
    setLatlon(true)
    setCity(false)
    setCountry(false)
  }

  const chooseCity = () => {
    setOpt("city")
    setLatlon(false)
    setCity(true)
    setCountry(false)
  }

  const chooseCountry = () => {
    setOpt("country")
    setLatlon(false)
    setCity(false)
    setCountry(true)
  }

  return (
    <Container>
      <div
        className="
          flex
          text-pr
          font-medium
          place-content-center
          mt-10
          sm:mt-20
          mb-3
          sm:mb-5
          animated
        "
      >
        Type any location...
      </div>
      <div
        className="
          flex
          gap-2
          text-tr
          text-gray-500
          place-content-center
          sm:mb-2
        "
      >
        <a
          onClick={chooseLatLon}
          className={`
            place-content-center
            sm:mb-2
            hover:text-white
            hover:scale-110
            cursor-pointer
            animated
            ${latLon ?
              "text-purple-400" : ""
            }
          `}
        >
          Lat/Lon
        </a>
        <a
          onClick={chooseCity}
          className={`
            place-content-center
            sm:mb-2
            hover:text-white
            hover:scale-110
            cursor-pointer
            animated
            ${city ?
              "text-purple-400" : ""
            }
          `}
        >
          City
        </a>
        <a
          onClick={chooseCountry}
          className={`
            place-content-center
            sm:mb-2
            hover:text-white
            hover:scale-110
            cursor-pointer
            animated
            ${country ?
              "text-purple-400" : ""
            }
          `}
        >
          City & Country
        </a>
      </div>
      <form
        className="
          flex
          flex-col
          gap-2
          items-center
          px-10
          sm:px-36
          md:px-40
          xl:px-72
        "
      >
        <Input
          type="text"
          placeholder="How's the weather in..."
          value={search}
          disabled={disabledInput}
          onChange={(e) => { setSearch(e.target.value) }}
          className={`
            px-2
            text-tr
            text-center
            font-medium
            h-8
            w-full
            text-white
            bg-transparent
            border-b-2
            border-purple-500
            rounded-sm
            outline-none
            placeholder:italic
            focus:placeholder:text-transparent
            animated
            ${!disabledInput ?
              "opacity-100" : "opacity-50 cursor-not-allowed"
            }
          `}
        />
        <Button
          type="submit"
          disabled={disabledButton}
          className={`
            flex
            place-content-center
            items-center
            text-tr
            font-medium
            w-5/12
            py-1
            px-2
            rounded-lg
            border-2
            border-purple-500
            animated
            ${!disabledButton ?
              "hover:bg-black hover:text-purple-500 bg-purple-500 text-white"
              : "opacity-50 cursor-not-allowed bg-black text-purple-500"
            }
          `}
        >
          <FaSearchLocation />
          &nbsp;Search
        </Button>
      </form>

    </Container>
  )
}
