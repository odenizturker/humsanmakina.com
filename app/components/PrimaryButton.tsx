'use client'
import React from 'react'

export const PrimaryButton = ({text, onClick}) => {
  return (
    <button
    className="btn btn-outline btn-primary btn-block text-bold"
    onClick={onClick}
    >{text}</button>
  )
}
export default PrimaryButton;