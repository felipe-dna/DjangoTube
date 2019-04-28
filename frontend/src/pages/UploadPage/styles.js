import styled from 'styled-components';


export const UploadContainer = styled.div`
    width: 85%;
    height: calc(100% - 56px);

    background: transparent;

    float: right;

    display: flex;
    align-content: center;
`;

export const UploadBox = styled.div`
    width: 700px;
    height: 300px;

    margin: 20px auto;

    background-color: #FFFFFF;
    border: 1px solid #DCDCDC;
    border-radius: 2px;

    display: flex;
    align-items: center;
    align-content: center;

    div {
        width: 300px;
        height: 200px;

        margin: auto;
    }
`;

export const UploadArea = styled.div`
    width: 100%;
    height: 100%;

    border: 4px #DCDCDC dotted;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;

    cursor: pointer;

    /* UploadArea span */
    span {
        display: block;
        height: 70%;

        text-align: center;
        
        font-size: 140px;
        color: #DCDCDC;

        overflow: hidden;
    } span:hover {
        color: #007369;
    }

    /* UploadArea p */
    p {
        display: block;
        max-height: 38%;

        margin: 10px auto;
        font-size: 16px;
    }
`; 