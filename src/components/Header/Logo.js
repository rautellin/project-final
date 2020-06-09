import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Menu } from './SVG/Menu'

export const Logo = () => {
  const Container = styled.div`
  display: flex;
  align-items: center;
  `

  const Nara = styled.h1`
  font-family: 'Barnett', serif;
  font-size: 72px;
  margin-left: 35px;
  `

  return (
    <Container>
      <Menu id="menu" />
      <NavLink to="/" title="NARA Sweden, Go to the NARA Homepage"><Nara>Nara.com</Nara></NavLink>
    </Container>
  )
}