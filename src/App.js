import { useEffect } from 'react'

const url = 'https://bit.ly/andrew-robles-resume'

function App() {
  useEffect(() => {
    window.location.replace(url)
  }, [])
  return <></>
}

export default App;
