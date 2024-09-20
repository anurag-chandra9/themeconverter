

import { useEffect, useState } from 'react'
import './App.css'
import { Themeprovider } from './Contexts/Theme'
import ThemeBtn from './components/Themebtn'
import Card from './components/card'
function App() {
  const [ThemeMode,setThememode]=useState("light")
  const lightTheme=()=>{
    setThememode("light")
  }
  const darkTheme=()=>{
    setThememode("dark")
  }
  //acutual change in theme
  useEffect(()=>{
      document.querySelector('html').classList.remove("light","dark")
       document.querySelector('html').classList.add(ThemeMode)
  },[ThemeMode])
  

  return (
    
    <Themeprovider value={{ThemeMode,lightTheme,darkTheme}}>
  
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      < ThemeBtn />
                        
                    </div>
                        <Card />
                    <div className="w-full max-w-sm mx-auto">
                       
                    </div>
                </div>
            </div>
            </Themeprovider>

    
  )
}

export default App
