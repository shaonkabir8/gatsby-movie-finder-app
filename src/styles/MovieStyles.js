import styled from "styled-components"

export const MovieStyle = styled.div`
  width: 25%;
  margin-bottom: 25px;
  img {
    width: 100%;
    height: 18rem;
    border-radius: 0.8rem;
    transition: all .3s linear;
  }
  .movie {
    width: 80%;
    font-size: 1.2rem;
    position: relative;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: #737783;

    &:hover  img{
        box-shadow: 0 0 20px ${props => props.theme.color.bg};
        opacity: 0.7;
    }
  }
`


export const MovieTitle = styled.p`
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  margin-top: 7px;
  margin-bottom: 2px;
`
export const Infocontainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 0;
  margin-top: 2px;
  color: ${props => props.theme.color.link};
`
export const MovieRatings = styled.p`
    position: absolute;
    right: 7px;
    top: -7px;
    background: yellow;
    display: inline-block;
    font-size: 12px;
    padding: 0px 5px;

    i {
        display: inline-block;
        margin-right: 2px;
    }
`;