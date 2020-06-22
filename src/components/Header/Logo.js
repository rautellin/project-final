import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { HamburgerMenu } from '../../lib/Icons'

export const Container = styled.div`
display: flex;
align-items: center;
`

export const Nara = styled.h1`
font-family: 'Barnett', serif;
font-size: 72px;
margin-left: 35px;
`

export const Logo = () => {
  return (
    <Container>
      <HamburgerMenu id="menu" />
      <NavLink to="/" title="NARA Sweden, Go to the NARA Homepage"><Nara>Nara.com</Nara></NavLink>
    </Container>
  )
}