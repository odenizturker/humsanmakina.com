import React from 'react'
import Divider from './Divider';
import SecondaryButton from './SecondaryButton';

type SecondaryProductPreviewProps = {
  title: string,
  description: string,
  imageSrc: string
}

export const SecondaryProductPreview = ({title, description, imageSrc}: SecondaryProductPreviewProps) => {
  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl md:max-w-3xl">
        <div className="md:flex flex space-x-10 items-center">
        <div className="max-w-sm md:space-y-10">
              <h1 className="text-5xl font-bold text-secondary">{title}</h1>
              <Divider/>
              <p className='text-lg text-neutral'>{description}</p>
              <SecondaryButton text="Sipariş Ver"/>
          </div>
          <div className="max-w-sm md:max-w-xl">
              <img
              src={imageSrc}
              alt="Product" />
          </div>
        </div>
    </div>
    
  )
}

export default SecondaryProductPreview;
