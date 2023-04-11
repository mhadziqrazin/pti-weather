interface WewatherProps {
  children: React.ReactNode
  value: string
}

const Weather: React.FC<WewatherProps> = ({
  children, value
}) => {
  return (
    <div
      className="
        bg-white/10
        hover:brightness-150
        hover:bg-purple-950
        hover:drop-shadow-[0_0px_10px_rgba(107,33,168)]
        animated
        py-2 md:py-4
        rounded-2xl
        w-40 sm:w-52 md:w-60 xl:w-72
        h-40 sm:h-52 md:h-60 xl:h-72
        flex
        place-content-center
      "
    >
      <div
        className="
          text-md
          sm:text-lg
          md:text-xl
          xl:text-2xl
          absolute
          text-gray-400
          flex
          items-center
          gap-1
          animated
        "
      >
        {children}
      </div>
      <div
        className="
          flex
          h-full
          place-content-center
          items-center
        "
      >
        <p
          className="
          text-5xl
          sm:text-6xl
          md:text-7xl
          xl:text-8xl
          animated
          "
        >
          {value}
        </p>
      </div>

    </div>
  )
}

export default Weather