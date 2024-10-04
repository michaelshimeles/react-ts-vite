import React from 'react'
import { DashboardWrapper } from './components/dashboard-wrapper'
import { Home } from './components/main/home'

const App: React.FC = () => {
  return (
    <DashboardWrapper>
        <Home />
    </DashboardWrapper>
  )
}

export default App