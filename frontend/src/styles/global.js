import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        /* ocean */
        --ocean-1: #003840;
        --ocean-2: #005A5B;
        --ocean-3: #007369;
        --ocean-4: #008C72;
        --ocean-5: #02A676;

        /* gray */
        --gray-1: #515151;
        --gray-2: #797979;
        --gray-3: #CCCCCC;

        /* white */
        --white-1: #FFFFFF;
        --white-2: #F8F8F8;
        --white-3: #F0F0F0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        background-color: #FAFAFA;
    }
`;