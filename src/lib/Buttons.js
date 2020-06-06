import styled from 'styled-components'

export const Button = styled.button`
   all: unset;
   height: 35px;
   text-align: center;
   text-transform: uppercase;
   font-family: 'Heebo', sans-serif;
   font-weight: 500;
   font-size: 15px;
   border: 1px solid black;
   padding: 0 17px;
`;

export const SlideButton = styled.button`
   all: unset;
   height: 35px;
   text-align: center;
   text-transform: uppercase;
   font-family: 'Heebo', sans-serif;
   font-weight: 500;
   font-size: 15px;
   border: 2px solid black;
   padding: 0 40px;
   margin-top: 10px;
   cursor: pointer;
`;

export const NavButton = styled.button`
   all: unset;
   text-transform: uppercase;
   font-family: 'Heebo', sans-serif;
   font-weight: 500;
   font-size: 40px;
   letter-spacing: -4px;
   cursor: pointer;
   margin-bottom: -27px;
   margin: ${(props) => props.margin};
`;

export const SmallNavButton = styled.button`
   all: unset;
   font-family: 'Heebo', sans-serif;
   font-size: 15px;
   text-transform: uppercase;
   font-weight: 300;
`;

export const FormButton = styled.button`
   all: unset;
   font-family: 'Heebo', sans-serif;
   font-size: 15px;
   text-transform: uppercase;
   font-weight: 300;
   color: white;
   background: black;
   width: 100%;
   text-align: center;
   padding: 11px 0;
   font-size: 18px;
   font-weight: 500;
   letter-spacing: -1px;

   :hover {
      background: rgb(51, 51, 51);
   }
`;