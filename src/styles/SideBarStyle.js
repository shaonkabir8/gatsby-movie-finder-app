import styled from 'styled-components';


export const SideBarNav = styled.nav`
    background-color: ${props => props.theme.color.bg};
    flex: 0 0 18%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 3rem;
    border-bottom-left-radius: 1.5rem;
`;

export const SideBarNavList = styled.ul`
    height: 70vh;
    font-size: 15px;
    list-style: none;
    overflow-y: scroll;
`;

export const SideBarNavItem = styled.li`
    position: relative;

    &:not(:last-child) {
        margin-bottom: .5rem;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 3px;
        background-color: ${props => props.theme.color.light};
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
        -webkit-transition: width .4s cubic-bezier(1,0,0,1) .2s,-webkit-transform .2s;
        transition: width .4s cubic-bezier(1,0,0,1) .2s,-webkit-transform .2s;
        transition: transform .2s,width .4s cubic-bezier(1,0,0,1) .2s;
        transition: transform .2s,width .4s cubic-bezier(1,0,0,1) .2s,-webkit-transform .2s;
    }
    &:hover::before {
        transform: scaleY(1);
        width: 100%;
    }
`;

export const SideBarNavLink = styled.a`
    color: ${props => props.theme.color.link} !important;
    text-decoration: none;
    text-transform: uppercase;
    padding: .8rem 3rem;
    display: flex;
    align-items: center;
    z-index: 5;
    position: relative;
    cursor: pointer;

    /* &:hover {
        background: ${props => props.theme.color.light};
        color: ${props => props.theme.color.link};
    } */
`;


export const FooterArea = styled.div`
  padding: 0 2rem;
  color: #737783;
  font-size: 15px;
  
  .movidb-credit {
    display: block;

    img {
      height: 100%;
      width: 130px;
      margin-bottom: 5px;
    }
  }
`

export const FooterContent = styled.div`
  margin-bottom: 1rem;
  .footer-link {
    color: #7678fb;
    text-decoration: none;
    transition: all 0.3s;
  }
  i {
    display: inline-block;
    margin: 0 5px;
    color: red;
  }
  .fa-coffee {
    color: ${props => props.theme.color.yellow};
  }
`