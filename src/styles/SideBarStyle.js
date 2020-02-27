import styled from 'styled-components';

const SideBarStyle = styled.div`

    .sidebar {
        position: fixed;
        width: 230px;
        height: 100vh;
        text-align: center;
        text-transform: uppercase;
        ul {
            margin:0;
            padding:0;
            list-style:none;
        }
        li {
            display: block;
        }
        a {
            display: block;
            font-size: 15px;
            text-decoration: none;
            padding: 10px;
            color: ${props => props.theme.color.link};
            transition: ${props => props.theme.transition};

            &:hover {
                background: ${props => props.theme.color.light};
                color: ${props => props.theme.color.link};
            }
        }
    }

`;

export default SideBarStyle;