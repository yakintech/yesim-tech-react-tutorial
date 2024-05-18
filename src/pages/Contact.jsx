import React, { useEffect } from 'react'

function Contact() {

  useEffect(() => {

    let interval = setInterval(() => {
      console.log("Hello")
    }, 1000);

    //useEffect CLEAN FUNCTION!
    return () => {
      clearInterval(interval)
    }
  }, [])



  return (
    <div>Contact</div>
  )
}

export default Contact