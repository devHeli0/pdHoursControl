import React, { useState } from 'react'

import CreateReportModal from '../features/Report/ReportModal'
import pdsLogo from '../utils/pds-logo-v2 1.svg'

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="relative text-left md:ml-20">
      <img src={pdsLogo} alt="PDS Logo" className="ml-10 w-50 h-auto mx-auto" />
      <h1 className="font-bold text-4xl mb-8 md:mt-11 text-black">PD Hours</h1>
      <button
        className="absolute w-48 h-12 -ml-40 bg-blue-500 text-white rounded-md px-4 py-2 mt-2"
        style={{ left: '1050px', top: '103px' }}
        onClick={openModal}
      >
        Lançar Horas
      </button>
      <CreateReportModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default Header
