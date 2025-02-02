import React from 'react'
import PrimaryButton from './PrimaryButton';
import Divider from './Divider';

export const PrimaryProductPreview = ({title, description, imageSrc, onClick}) => {
  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl md:max-w-3xl">
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
              <PrimaryButton text="Sipariş Ver" onClick={onClick} />
          </div>
        </div>
    </div>
    
  )
}

export default PrimaryProductPreview;
