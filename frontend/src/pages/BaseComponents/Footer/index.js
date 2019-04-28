import React, { Component } from 'react';

// styled components
import { 
    FooterContainer, ConfigSection, ConfigMenuList, FooterLinksContainer 
} from './styles';

import { Logo } from '../Header/styles';

// Icons
import { FaYoutube, FaUserSecret } from 'react-icons/fa';
import { IoIosHourglass } from 'react-icons/io';
import { MdHelp, MdPlace, MdAnnouncement } from 'react-icons/md';
 
import { Link } from 'react-router-dom';


// Footer Base Component
export default class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <section>

                    <ConfigSection>
                        {/* Logo Component */}
                        <Logo>
                            <Link to="/">
                                <span><FaYoutube /></span>
                                <strong> DjangoTube</strong>
                            </Link>
                        </Logo>

                        {/* Footer Menu List */}
                        <ConfigMenuList>
                            <li>
                                <i><MdAnnouncement /></i>
                                <span><strong>Linguagem:</strong> Português</span>
                            </li>
                            <li>
                                <i><MdPlace /></i>
                                <span><strong>Local:</strong> Brasil</span>
                            </li>
                            <li>
                                <i><FaUserSecret /></i>
                                <span><strong>Modo Restrito:</strong> Desativado</span>
                            </li>
                            <li>
                                <i><IoIosHourglass /></i>
                                <span><strong>Histórico</strong></span>
                            </li>
                            <li>
                                <i><MdHelp /></i>
                                <span><strong>Ajuda</strong></span>
                            </li>
                        </ConfigMenuList>
                    </ConfigSection>

                    {/* Footer Links */}
                    <FooterLinksContainer>
                        <section id="main-links">
                            <ul>
                                <li><Link to="/">Sobre</Link></li>
                                <li><Link to="/">Imprensa</Link></li>
                                <li><Link to="/">Direitos Autorais</Link></li>
                                <li><Link to="/">Criadores de Conteúdo</Link></li>
                                <li><Link to="/">Publicidade</Link></li>
                                <li><Link to="/">Desenvolvedores</Link></li>
                            </ul>
                        </section>
                        <section id="other-links">
                            <ul>
                                <li><Link to="/">Termos</Link></li>
                                <li><Link to="/">Privacidade</Link></li>
                                <li><Link to="/">Política e segurança</Link></li>
                                <li><Link to="/">Enviar feedback</Link></li>
                                <li><Link to="/">Testar os novos recursos</Link></li>
                            </ul>
                        </section>
                    </FooterLinksContainer>
                </section>
            </FooterContainer>
        )
    }
}
