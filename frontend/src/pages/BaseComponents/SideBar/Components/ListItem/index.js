import React from 'react';

// styled
import { Container, Layout, Icon, Text } from './styled';
import { Link } from 'react-router-dom';


const PlaylistItem = (props) => {

    // formata o texto.
    const handleLength = (text) => {
        if(text.length > 19) {
            return `${text.substr(0, 16)}...`
        }

        return text;
    };

    return (
        <Container>
            <Link to={props.url}>
                <Layout>
                    <Icon>{props.icon}</Icon>
                    <Text title={props.text}>{handleLength(props.text)}</Text>
                </Layout>
            </Link>
        </Container>
    );
};

export default PlaylistItem;