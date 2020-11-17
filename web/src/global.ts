import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: #fff;
        font-family: 'Nunito', sans-serif;
        text-decoration: none;
        outline: none;
    }
`

export default GlobalStyle;