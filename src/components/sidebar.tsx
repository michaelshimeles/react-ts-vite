import { ChartPieIcon, CogIcon } from '@heroicons/react/24/outline';
import { PanelRightClose, PanelRightOpen } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className={`${isOpen ? 'w-60' : 'w-20'} bg-gray-100 text-gray-800 p-4 transition-all duration-300 ease-in-out border-r`}>
      <div className={`flex items-center justify-center mb-6 ${isOpen ? 'justify-between' : 'justify-center'}`}>
        <h1 className={`text-xl font-bold ${isOpen ? 'opacity-100' : 'opacity-0 hidden'} transition-opacity duration-300`}>
          Dashboard
        </h1>
        {isOpen ? <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-200 transition-colors duration-200">
          <PanelRightOpen className="h-6 w-6" />
        </button> :
          <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-200 transition-colors duration-200">
            <PanelRightClose className="h-6 w-6" />
          </button>}
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className={`flex items-center ${isOpen ? 'justify-start' : 'justify-center'} space-x-2 p-2 rounded-md transition-all duration-200 ease-in-out ${isActive('/') ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
            >
              <ChartPieIcon className="h-5 w-5 min-w-[1.25rem]" />
              <span className={`${isOpen ? 'opacity-100' : 'opacity-0 hidden'} transition-opacity duration-300`}>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className={`flex items-center ${isOpen ? 'justify-start' : 'justify-center'} space-x-2 p-2 rounded-md transition-all duration-200 ease-in-out ${isActive('/settings') ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
            >
              <CogIcon className="h-5 w-5 min-w-[1.25rem]" />
              <span className={`${isOpen ? 'opacity-100' : 'opacity-0 hidden'} transition-opacity duration-300`}>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}