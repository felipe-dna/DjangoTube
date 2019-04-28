import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 56px;

    position: fixed;
    top: 0;

    z-index: 10;

    display: flex;
    align-content: center;
    align-items: center;

    background: #FFFFFF;
    border-bottom: 1px solid #DCDCDC;

    section {
        width: 95%;
        height:  34px;

        margin: auto;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

// logo container
export const Logo = styled.div`
    min-width: 10%;
    height: 100%;


    a {
        display: flex;
        align-self: center;
        align-items: center;
       
        height: 100%;
        width: 100%;
        
        color: var(--ocean-1);
        text-decoration: none;
    }

    span {
        overflow: hidden;
        padding-left: 10px;
        padding-top: 10px;
        font-size: 40px;
    }

    strong {
        font-size: 24px;
    }
`;


// Formulário de busca
export const SearchForm = styled.div`
    width: 50%;
    height: 100%;

    /* Search Form > Form */
    form {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: row;

    /* Search Form > Form > Input */
        input {
            width: 90%;
            padding: 3px;

            font-size: 16px;

            border: 1px solid #DCDCDC;
            border-top-left-radius: 2px;
            border-bottom-left-radius: 2px;

            overflow: hidden;
        }

    /* Search Form > Form > Button */
        button {
            width: 10%;

            background-color: var(--white-1);
            color: var(--gray-1);

            border: 1px #DCDCDC solid;
            border-left: none;
            border-top-right-radius: 2px;
            border-bottom-right-radius: 2px;

            cursor: pointer;
        }

        button:hover {
            background-color: var(--white-2)
        }
    }

`;


// Header Menu
export const HeaderMenu = styled.div`
    width: 10%;
    height: 100%;

    ul {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: center;
        justify-content: space-between;
        list-style: none;

        li {
            width: 20%;
            height: 100%;

            margin: auto;
            padding: 4px;

            a {
                color: var(--gray-1);
                font-size: 20px;
            }
        }
    }
`;