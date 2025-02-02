'use client'
import React from 'react'

type SecondaryButtonProps = {
  text: string;
};

export const SecondaryButton = ({text}: SecondaryButtonProps) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <button
    className="btn btn-outline btn-secondary btn-block text-bold"
    onClick={scrollToContact}
    >{text}</button>
  )
}
export default SecondaryButton;