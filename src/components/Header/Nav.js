import React from 'react'
import styled from 'styled-components'

export const Nav = () => {
  const Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  `

  const Logo = styled.h1`
  font-family: 'Vidaloka', serif;
  font-size: 72px;
  font-weight: lighter;
  letter-spacing: -10px;
  text-transform: uppercase;
  `

  const Menu = styled.div`
  width: 32px;
  position: relative;

  ::before{
    content: "";
    position: absolute;
    top: 2px;
    left: 0;
    width: 32px;
    height: 9px;
    border-top: 1px double #000;
    border-bottom: 1px solid #000;
  }
  `

  return (
    <Container>
      <Menu />
      <Logo>Nara</Logo>
    </Container>
  )
}