import { useEffect } from 'react'

const url = 'https://bit.ly/andrew-robles-resume'

function Resume() {
  useEffect(() => {
    window.location.replace(url)
  }, [])
  return <></>
}

export default Resume;
