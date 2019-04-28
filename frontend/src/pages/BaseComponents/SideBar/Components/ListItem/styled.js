import styled from 'styled-components';

export const Container = styled.li`
    width: 100%;
    height: 37px;

    background-color: transparent;

    display: flex;

    a {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: row;
        justify-content: center;

        text-decoration: none;

        :hover {background-color: #DCDCDC;}
    }

`;


export const Layout = styled.div`
    width: 85%;
    height: 100%;

    display: flex;
    flex-direction: row;
`;


export const Icon = styled.div`
    width: 20%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 18px;
    color: #666666;
`;

export const Text = styled.span`
    width: 80%;

    padding-left: 5px;

    display: flex;
    align-items: center;
    justify-content: left;

    font-size: 16px;
    color: #555555;
`;