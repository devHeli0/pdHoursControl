import React from 'react'

import pdsLogo from '../utils/pds-logo-v2 1.svg'

const Header: React.FC = () => {
  return (
    <div className="relative text-left md:ml-20">
      <img src={pdsLogo} alt="PDS Logo" className="ml-10 w-50 h-auto mx-auto" />
      <h1 className="font-bold text-4xl mt-4 md:mt-8 text-black">PD Hours</h1>
    </div>
  )
}

export default Header
