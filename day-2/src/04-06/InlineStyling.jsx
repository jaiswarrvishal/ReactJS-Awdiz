import React from 'react'
import "./../Styles/InlineStyling.css";

const InlineStyling = () => {
    const styles = { color: "red", fontSize: "90px"};
  return (
    <>
    <div style = {{ color: "Blue", fontSize: "40px"}}>InlineStyling</div>
    <div style = {styles}>InlineStyling</div>
    <p className='testClassName'>Testing className</p>
    <p id='testingId'>Testing Id</p>
    </>
  )
}

export default InlineStyling;