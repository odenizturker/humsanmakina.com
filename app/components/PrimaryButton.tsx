'use client'
import React from 'react'

type PrimaryButtonProps = {
  text: string;
};

export const PrimaryButton = ({ text }: PrimaryButtonProps) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <button
    className="btn btn-outline btn-primary btn-block text-bold"
    onClick={scrollToContact}
    >{text}</button>
  )
}
export default PrimaryButton;