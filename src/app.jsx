import { useState } from 'preact/hooks'
import RepositoryList from './components/RepositoryList'
import './style/global.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RepositoryList/>
    </>
  )
}
