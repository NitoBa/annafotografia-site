import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root{
  --primaryColor:#6C63FF;
  --primaryColorLight:#928BFF;
  --primaryColorDark: #615ADA;
  --whatsappColor:#25D366;
  --whatsappColorDark:#075E54;
}

*, html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
  font-family: 'Poppins', sans-serif;

}

button {
    cursor: pointer;
    border: 0;
    color: #000;
}

a {
  color: inherit;
  text-decoration: none;
}

ul{
    list-style-type:note;
}
`