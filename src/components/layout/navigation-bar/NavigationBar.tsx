import type { PropsWithChildren } from 'react'
import './NavigationBar.module.css'

interface NavigationBarProps {}

const NavigationBar = ({}: PropsWithChildren<NavigationBarProps>) => {
  return (
    <nav className='navigationBar'>
      <div className='section'>

      </div>
    </nav>
  )
}

export default NavigationBar