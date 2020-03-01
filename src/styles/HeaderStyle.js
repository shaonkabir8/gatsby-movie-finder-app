import styled from "styled-components"

const HeaderStyle = styled.div`
  .header {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    .logo {
      padding-left: 46px;
    }

    .search-bar {
      width: 40%;
    }

    .dropdown_item p {
      color: #fff;
      font-weight: bold;
    }

    .logo a {
      color: ${props => props.theme.color.yellow};
      padding: 4px 8px;
      border: 1px solid;
      border-radius: 3px;
      display: inline-block;
      font-size: 20px;
      transition: ${props => props.theme.transition};

      &:hover {
        color: ${props => props.theme.color.link};
      }
    }

    input[type="text"] {
      width: 100%;
      background: ${props => props.theme.color.light};
      color: ${props => props.theme.color.link};
      border: 1px solid transparent;
      padding: 9px 20px;
      border-radius: 50px;

      &:focus {
        outline-color: transparent;
      }
    }
  }
`

export default HeaderStyle
