import styled, { css } from 'styled-components';

const dragActive = css`
    border-color: #78e5d5;
`;

const dragReject = css`
    border-color: #e57878;    
`;

export const DropContainer = styled.div.attrs({
    className: "dropzone"
})`
    border: 1px dashed #DDD;
    border-radius: 4px;
    cursor: pointer;

    transition: height .2s ease;

    ${props => props.isDragActive && dragActive };
    ${props => props.isDragReject && dragReject };

`;

const messageColors = {
    default: '#999',
    error: '#E57878',
    success: '#78E5D5',
}


// Icone de upload
export const UploadIcon = styled.span`
    display: block;
    width: 100%;
    height: 70%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 140px;
    color: ${props => messageColors[props.type || 'default']};

    overflow: hidden;
    display: flex;
`;

// Mensagem de upload
export const UploadMessage = styled.p`
    /* muda a cor de acordo com o estado do input */
    color: ${props => messageColors[props.type || 'default']};
    
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 15px 0;
`;