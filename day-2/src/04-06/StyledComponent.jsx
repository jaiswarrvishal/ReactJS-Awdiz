import React from 'react'
import styled from "styled-components";

const MyStyledComponents = styled.p`
 font-size: 30px;
 color: orange;
`

function StyledComponent() {
  return (
    <div>
        <p>StyledComponent</p>
        <MyStyledComponents>MyStyledComponents</MyStyledComponents>
    </div>
  )
}

export default StyledComponent;