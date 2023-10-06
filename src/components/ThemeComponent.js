import React, { useContext } from 'react'
import ThemeContext from '../modals/ThemeContext'

const ThemeComponent = () => {
    const {theme} = useContext(ThemeContext)
    console.log(theme)
  return (
    <div className={theme ? 'light' : 'dark'}>ThemeComponent</div>
  )
}

export default ThemeComponent