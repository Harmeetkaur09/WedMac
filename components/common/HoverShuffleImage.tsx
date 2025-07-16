"use client"

import Image from "next/image"
import { useState } from "react"

interface HoverShuffleImageProps {
  primarySrc: string
  secondarySrc: string
  alt: string
  className?: string
}

export default function HoverShuffleImage({
  primarySrc,
  secondarySrc,
  alt,
  className = "",
}: HoverShuffleImageProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative w-full h-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={primarySrc}
        alt={alt}
        fill
        className={`object-cover rounded-lg transition-opacity duration-700 ease-in-out ${isHovered ? "opacity-0" : "opacity-100"}`}
        priority
      />
      <Image
        src={secondarySrc}
        alt={alt}
        fill
        className={`object-cover rounded-lg absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  )
}
