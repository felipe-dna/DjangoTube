import React, { Component } from 'react';

// packages
import Dropzone from 'react-dropzone';
import { FiAlertOctagon, FiCheckSquare, FiUpload } from 'react-icons/fi';


// styles
import { DropContainer, UploadMessage, UploadIcon } from './styles';


// Upload Component
export default class Upload extends Component {

	// Icon
	renderDragIcon = (isDragActive, isDragReject) => {
		if(!isDragActive) {
			return <UploadIcon><FiUpload /></UploadIcon>
		}

		if(isDragReject) {
			return <UploadIcon type="error"><FiAlertOctagon /></UploadIcon>
		}

		return <UploadIcon type="success"><FiCheckSquare /></UploadIcon>
	}

	// Mensagem
	renderDragMessage = (isDragActive, isDragReject) => {
		if (!isDragActive) {
			return <UploadMessage>Arraste seus vídeos aqui!</UploadMessage>
		}

		if (isDragReject) {
			return <UploadMessage type="error" >Arquivo não suportado!</UploadMessage> 
		}

		return <UploadMessage type="success" >Ótimo! Solte-o aqui!</UploadMessage>
	}

	

	// Renderiza o componente na tela.
    render () {

		const { onUpload } = this.props;


        return (<>

			<Dropzone accept="video/*" onDrop={onUpload}>
			{ ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
				
				// Drop Container
				<DropContainer
					{... getRootProps() }
					isDragActive={isDragActive} // passando um vídeo por cima da zone
					isDragReject={isDragReject} // passando um arquivo que não é aceito por cima da zone
				>
					<input {... getInputProps() } />
					{ this.renderDragIcon(isDragActive, isDragReject) }
					{ this.renderDragMessage(isDragActive, isDragReject) }
				</DropContainer>
			)}

			</Dropzone>
		</>)
    }
};