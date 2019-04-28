import styled from 'styled-components';


export const SideBarContainer = styled.aside`
    width: 18%;
    height: calc(100% - 56px);

    float: left;
    margin-top: 56px;

    display: flex;
    flex-direction: column;

    background-color: #F0F0F0;
    border: 1px solid #DCDCDC;

    /* overflow-y: scroll; */
`;


export const OptionsContainer = styled.section`
    width: 100%;
    padding: 14.5px 0;

    display: flex;
    align-items: center;

    border-bottom: 1px solid #DCDCDC;


    ul {
        width: 100%;
        min-width: 80%;

        display: flex;
        flex-direction: column;



    }
`;