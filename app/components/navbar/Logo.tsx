'use client'

import Image from "next/image"

const Logo = () => {
  return (
    <Image
    src="/images/logo.png"
    alt="Logo"
    height="50"
    width="50"
    className="hidden md:block cursor-pointer"
    />
  )
}

export default Logo