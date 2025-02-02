'use client'
import React from 'react'

export const SecondaryButton = ({text, onClick}) => {
  return (
    <button
    className="btn btn-outline btn-secondary btn-block text-bold"
    onClick={onClick}
    >{text}</button>
  )
}
export default SecondaryButton;