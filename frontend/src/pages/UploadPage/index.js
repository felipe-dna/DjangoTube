import React, { Component } from 'react';

// local components
import Header from '../BaseComponents/Header';
import Drop from './Components/Drop';

// Styled Components
import { UploadContainer, UploadBox } from './styles';


// Upload Component
export default class Upload extends Component {
    render() {
        return (<>
            <Header />

            <UploadContainer>
                <UploadBox>
                    <Drop />
                </UploadBox>
            </UploadContainer>
        </>)
    }
};