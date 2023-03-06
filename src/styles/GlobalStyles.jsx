import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}

:root {
    --color-bg-dark: #3a3a3a;
    --color-bg-black: #111111;
    --color-white: #fefefe;
    --color-primary: #7634d8;
    --color-danger: rgb(249, 84, 84);
}

body {
    font-family: 'Montserrat', sans-serif;
    display: grid;
    place-items: center;
    color: var(--color-white);
    background: #ccc;
    line-height: 1.5;
}

.btn {
    background: var(--color-bg-dark);
    border-radius: 0.8rem;
    padding: 0.8rem;
    font-size: 1.6rem;
    color: var(--color-white);
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
    transition: all 300ms ease;
}

.btn.lg {
    padding: 0.8rem 1.5rem;
    font-size: 1.2rem;
    box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.4);
}

.btn.danger {
    background: var(--color-danger);
}

.btn.primary {
    background: var(--color-primary);
}

.btn:hover {
    cursor: pointer;
    box-shadow: none;
}

#app {
    background: var(--color-bg-black);
    height: 48rem;
    width: 24rem;
    padding: 2rem 1.6rem;
    overflow-y: scroll;
    position: relative;
}

::-webkit-scrollbar {
    display: none;
}

h2,  h4 {
    font-weight: 500;
}

h2 {
    font-size: 2rem;
}

`;
