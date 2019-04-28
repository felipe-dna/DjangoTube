import React, { Component } from 'react';

// packages
import { FaSearch, FaPlus, FaThList, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// styled components
import { HeaderContainer, Logo, SearchForm, HeaderMenu } from './styles';

// react icons
import { FaYoutube } from 'react-icons/fa';



// Header Component
class Header extends Component {

    render() {
        return (
            <HeaderContainer>
                <section>
                    <Logo>
                        <Link to="/">
                            <span><FaYoutube /></span>
                            <strong> DjangoTube</strong>
                        </Link>
                    </Logo>

                    <SearchForm>
                        <form className="sf-form">
                            <input type="search" placeholder="Pesquisar" />
                            <button type="submit"><FaSearch /></button>
                        </form>
                    </SearchForm>

                    <HeaderMenu>
                        <ul>
                            <li><Link to="/upload"><FaPlus /></Link></li>
                            <li><Link to="/"><FaThList /></Link></li>
                            <li><Link to="/user/:id"><FaUser /></Link></li>
                        </ul>
                    </HeaderMenu>
                </section>
            </HeaderContainer>
        );
    };
;}

export default Header;