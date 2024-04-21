import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar: React.FC = () => {
  return (
    <nav className="pb-4 border-b border-gray-200">
      <ul className="flex justify-items-start pt-2 ml-20 space-x-4">
        <li>
          <NavLink
            to="/squads"
            className={(navData) =>
              navData.isActive
                ? 'font-roboto font-bold text-base text-black border-b-8 border-blue-500'
                : 'font-roboto font-normal text-base text-black hover:underline '
            }
          >
            Squads
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/employees"
            className={(navData) =>
              navData.isActive
                ? 'font-roboto font-bold text-base text-black border-b-8 border-blue-500'
                : 'font-roboto font-normal text-base text-black hover:underline'
            }
          >
            Usuários
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
