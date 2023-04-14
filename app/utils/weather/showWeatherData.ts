import { toast } from "react-toastify"

const showWeatherData = async (
  data: any,
  setData: (value: {
    temp: string,
    feels: string,
    humidity: string,
    wind: string
  }) => void,

) => {
  console.log(data)
  if (data === 'invalid') {
    toast.error('Cannot find your location :(')
    setData({
      temp: '-',
      feels: '-',
      humidity: '-',
      wind: '-'
    })
  } else if (data === 'internal') {
    toast.error("We're having problem :( Try again later.")
    setData({
      temp: '-',
      feels: '-',
      humidity: '-',
      wind: '-'
    })
  } else {
    setData({
      temp: data.temp,
      feels: data.feels_like,
      humidity: data.humidity,
      wind: data.wind_speed
    })
  }
}

export default showWeatherData