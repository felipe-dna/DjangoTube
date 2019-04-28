import React, { Component } from 'react';

// services
import api from '../../services/api';

// my components
import Header from '../BaseComponents/Header';
import SideBar from '../BaseComponents/SideBar';

// styled components
// import { VideoList } from './styles';
import { BodyContainer } from '../BaseComponents/Body/styles';



// Main Page Component
export default class Main extends Component {
        
    state = {
        videos: [],
        playlists: [
            {
                id: "12345",
                text: "Minha Primeira Lista de Reprodução",
                url: "minha-primeira-lista-de-reprodução",
            },
            {
                id: "123dasdsa45",
                text: "Minha segunda Lista de Reprodução",
                url: "minha-segunda-lista-de-reprodução",
            }
        ]
    }

    async componentDidMount() {
        const response = await api.get('videos');

        this.setState({
            videos: response.data.map(video => ({...video}))
        })
    }



    render() {
        // título da página
        document.title = "DjangoTube"

        const { videos } = this.state;
        return (<>
            <Header />
            <SideBar state={this.state} />
            <BodyContainer>
                { videos.map((video) =>
                    <li key={video.id}>

                        <video src={video.video_file} type="video/mp4" controls width="320" />
                        {/* <img src={video.thumbnail} alt={`${video.title} - thumbnail`} width="300px" /> */}
                    </li>
                )}
            </BodyContainer>
            {/* <Footer /> */}
    </>)
    }
};