import Image from 'next/image'
import React from 'react'

export default function Category(props) {
  return (
    <div>
      <Image src={props.src} width={200} height={200}/><br/>
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
    </div>
  )
}
