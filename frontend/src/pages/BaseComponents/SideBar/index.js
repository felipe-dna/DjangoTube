import React from 'react';

// styled components
import { SideBarContainer, OptionsContainer } from './styles';

import ListItem from './Components/ListItem';

// icons
import { MdHome, MdPlaylistPlay } from 'react-icons/md';
import { FaFire, FaFolderOpen, FaFolder, FaHistory, FaClock, FaRegThumbsUp } from 'react-icons/fa';


const SideBar = (props) =>  {

    const { playlists } = props.state;


    return (
        <SideBarContainer>
            
            {/* Home - Em Alta - Inscrições */}
            <OptionsContainer>
                <ul>
                    <ListItem url="/"                   icon={<MdHome       />} text="Home"       ></ListItem>
                    <ListItem url="/feed/treending"     icon={<FaFire       />} text="Em alta"    ></ListItem>
                    <ListItem url="/feed/subscriptions" icon={<FaFolderOpen />} text="Inscrições" ></ListItem>
                </ul>
            </OptionsContainer>

            {/* Playlists */}
            <OptionsContainer>
                <ul>
                    <ListItem url="/feed/library"           icon={<FaFolder      />} text="Biblioteca"                 ></ListItem>
                    <ListItem url="/feed/history"           icon={<FaHistory     />} text="Histrórico"                 ></ListItem>
                    <ListItem url="/feed/playlist/?list=WL" icon={<FaClock       />} text="Assistir mais tarde"        ></ListItem>
                    <ListItem url="/feed/playlist/?list=LM" icon={<FaRegThumbsUp />} text="Vídeos marcados como gostei"></ListItem>
                
                    {/* Playlists do usuário */}
                    {playlists.map(playlist => (
                        <ListItem key={playlist.id} url={playlist.url} icon={<MdPlaylistPlay />} text={playlist.text} />
                    ))}
                </ul>
            </OptionsContainer>

        </SideBarContainer>
    )
}

export default SideBar;