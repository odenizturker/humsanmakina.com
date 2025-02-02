import React from 'react'
import PrimaryButton from './PrimaryButton';
import Divider from './Divider';

type PrimaryProductPreviewProps = {
  title: string,
  description: string,
  imageSrc: string
}

export const PrimaryProductPreview = ({title, description, imageSrc}: PrimaryProductPreviewProps) => {
  return (
    <div className="mx-auto my-24 max-w-3xl overflow-hidden rounded-2xl md:max-w-3xl">
        <div className="md:flex flex space-x-10 items-center">
          <div className="max-w-sm md:max-w-xl">
              <img
              src={imageSrc}
              alt="Product" />
          </div>
          <div className="max-w-sm md:space-y-10">
              <h1 className="text-5xl font-bold text-primary">{title}</h1>
              <Divider/>
              <p className='text-lg text-neutral'>{description}</p>
              <PrimaryButton text="Sipariş Ver" />
          </div>
        </div>
    </div>
    
  )
}

export default PrimaryProductPreview;
