'use client'

import { useState } from "react"
import Container from "./components/Container"
import Input from "./components/Input"
import useComponentDisabler from "./hooks/useComponentDisabler"
import Button from "./components/Button"
import { FaSearchLocation, FaTemperatureHigh } from "react-icons/fa"
import { BsPersonLinesFill } from "react-icons/bs"
import { IoIosWater } from "react-icons/io"
import { BiWind } from "react-icons/bi"
import { Slide, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Weather from "./components/Weather"
import TypewriterComponent from "typewriter-effect"
import chooseLatLon from "./utils/weather/chooseLatlon"
import chooseCity from "./utils/weather/chooseCity"
import chooseCountry from "./utils/weather/chooseCountry"
import getWeatherData from "./utils/weather/getWeatherData"
import Navbar from "./components/navbar/Navbar"

export default function Home() {
  // state for loading indicator
  const [loading, setLoading] = useState(false)

  // state for option choosen
  const [opt, setOpt] = useState("")
  const [latLon, setLatLon] = useState(false)
  const [city, setCity] = useState(false)
  const [country, setCountry] = useState(false)

  // state for input search bar value
  const [search, setSearch] = useState("")

  // state for input & button search visibility
  const [disabledButton, setDisabledButton] = useState(true)
  const [disabledInput, setDisabledInput] = useState(true)

  // state array of data that'll be shown
  const [data, setData] = useState({
    temp: '-',
    feels: '-',
    humidity: '-',
    wind: '-'
  })

  // disable input field when option not choosen
  useComponentDisabler(setDisabledInput, opt)

  // disable search button when input field empty
  useComponentDisabler(setDisabledButton, search)

  return (
    <Container>
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Slide}
      />
      <div
        className="
          flex
          text-pr
          font-medium
          place-content-center
          mt-10
          sm:mt-20
          mb-3
          md:mb-6
          animated
        "
      >
        Type any&nbsp;<TypewriterComponent
          options={{
            strings: ['location...', 'latitude/longitude', 'city', 'city & country'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div
        className="
          flex
          gap-2
          text-tr
          text-gray-500
          place-content-center
          my-4
          md:my-6
        "
      >
        <a
          onClick={() => {
            chooseLatLon(setOpt, setLatLon, setCity, setCountry)
          }}
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
          Lat Lon
        </a>
        <a
          onClick={() => {
            chooseCity(setOpt, setLatLon, setCity, setCountry)
          }}
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
          onClick={() => {
            chooseCountry(setOpt, setLatLon, setCity, setCountry)
          }}
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
          City, Country
        </a>
      </div>

      <form
        onSubmit={(e) => {
          getWeatherData(
            e,
            setLoading,
            latLon,
            city,
            country,
            search,
            setData)
        }}
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
          placeholder="choose one of the three formats"
          value={search}
          disabled={disabledInput}
          onChange={(e) => { setSearch(e.target.value) }}
          className={`
            px-2
            text-sc
            text-center
            font-medium
            h-7
            sm:h-10
            xl:h-12
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
            text-sc
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
      <div className="flex flex-col items-center justify-center gap-4 my-10">
        <div className="flex gap-4">
          <Weather
            value={`${data.temp}`}
            loading={loading}>
            <FaTemperatureHigh />Temp. (&deg;C)
          </Weather>
          <Weather
            value={`${data.feels}`}
            loading={loading}
          >
            <BsPersonLinesFill />Feels like (&deg;C)
          </Weather>
        </div>
        <div className="flex gap-4">
          <Weather
            value={`${data.humidity}`}
            loading={loading}
          >
            <IoIosWater />Humidity (%)
          </Weather>
          <Weather
            value={`${data.wind}`}
            loading={loading}
          >
            <BiWind />Wind (km)
          </Weather>
        </div>
      </div>

    </Container>
  )
}
