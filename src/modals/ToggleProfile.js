import { Switch } from 'antd'
import React, { useContext, useState } from 'react'
import ThemeContext from './ThemeContext';

function SwitchTheme() {
    const {theme, onChangeTheme} = useContext(ThemeContext)
    

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
        onChangeTheme()
    }
    console.log(theme)
    
  return (
    <div><Switch defaultChecked onChange={onChange} />

    </div>
  )
}

export default SwitchTheme