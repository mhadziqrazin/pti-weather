'use client'

import { useState } from "react";
import Container from "./components/Container";
import Input from "./components/Input";
import useButtonDisabler from "./hooks/useButtonDisabler";
import Button from "./components/Button";

export default function Home() {
  // state for input search bar
  const [search, setSearch] = useState("")

  // state for button search visibility
  const [disabled, setDisabled] = useState(true)

  // disable search button when input field empty
  useButtonDisabler(setDisabled, search)

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
          href=""
          className="
            place-content-center
            sm:mb-2
            hover:text-white
            animated
          "
        >
          Lat/Lon
        </a>
        <a
          href=""
          className="
            place-content-center
            sm:mb-2
            hover:text-white
            animated
          "
        >
          City
        </a>
        <a
          href=""
          className="
            place-content-center
            sm:mb-2
            hover:text-white
            animated
          "
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
          onChange={(e) => { setSearch(e.target.value) }}
          className="
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
            animated
          "
        />
        <Button
          type="submit"
          disabled={disabled}
          className={`
            text-tr
            font-medium
            w-3/6
            py-2
            px-4
            rounded-lg
            border-2
            border-purple-500
            animated
            ${!disabled ? "hover:bg-black hover:text-purple-500 bg-purple-500 text-white" : "opacity-50 cursor-not-allowed bg-black text-purple-500"}
          `}
        >
          Search
        </Button>
      </form>

    </Container>
  )
}
