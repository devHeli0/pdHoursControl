import React from 'react'
import pdsLogo from 'src/utils/pds-logo-v2 1.svg'

const Header: React.FC = () => {
  return (
    <div className="relative">
      <img
        src={pdsLogo}
        alt="PDS Logo"
        className="absolute w-50 h-auto left-160 top-14"
      />
      <div className="md:absolute md:left-40 md:top-24 md:w-auto md:transform-none md:inset-auto sm:relative sm:left-10 sm:top-10 sm:w-auto sm:transform-none sm:inset-auto">
        <h1 className="font-bold text-4xl md:text-5xl text-center text-black">
          PD Hours
        </h1>
      </div>
    </div>
  )
}

export default Header
