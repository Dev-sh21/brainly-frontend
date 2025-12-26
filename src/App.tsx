import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { PlusIcon } from './icons/plusIcon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button startIcon={<PlusIcon/>}size="sm" variant="primary" text="Share"/>
      <Button size="md" variant="secondary" text="Add Content"/>
      <Button size="lg" variant="secondary" text="Add Contents"/>

    </>
  )
}

export default App
