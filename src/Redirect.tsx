import { useEffect } from 'react'

type RedirectProps = {
  url: string
}

const Redirect = ({url}: RedirectProps) => {
  useEffect(() => {
    window.location.href = url
  }, [])
  return <></>
}

export default Redirect
