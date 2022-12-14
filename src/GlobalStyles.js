import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

:root {
  --theme-color-choco: #56494c;
  --theme-color-cream: #fff7ef
}


html {
  font-size: 16px;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  padding: 0;
  margin: 0;
  background-color: var(--theme-color-cream);
  
}

h1, h2, h3 {
  margin: 0;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`
export default GlobalStyles
