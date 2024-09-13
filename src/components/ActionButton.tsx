import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    target: string;
    children: React.ReactNode
}

const ActionButton = ({target,children}: Props) => {
  return (
    <div
    className='w-52'
    >
    <AnchorLink
    href={`#${target}`}>
    <div
    className='text-white text-lg bg-black px-6 py-2 hover:bg-gray-500 transition duration-500 ease-in-out cursor-pointer font-roboto font-light'
    >
        {children}   
    
    </div>
    </AnchorLink>
    </div>
  )
}

export default ActionButton