import styled from "styled-components"

const MovieInfoStyle = styled.div`
  .section-bg {
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 100vh;
    position: relative;
    z-index: 1;

    &::before {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #000;
      z-index: -1;
      opacity: 0.6;
    }
  }

  .movie--info {
    width: 65%;
    height: 100vh;
    color: #edf2f5;
    background: #0c0f26;
    position: fixed;
    left: 50%;
    transform: translate(-50%);

    a {
        display: inline-block;
        background: #171934;
        color: #7678fb;
        padding: 7px 10px;
        margin: 15px 0;
        text-decoration: none;
        transition: all 0.2s linear;
        box-shadow: 0 0 10px #0d112f;
        border-radius: 50px;

      &:hover {
        color: #fff;
      }
      i {
          display: inline-block;
          margin: 0 7px;
      }

    }

    &__header {
      display: flex;
      justify-content: space-between;
        align-items: baseline;
      &--title {
        font-weight: 700;
        letter-spacing: 4px;
        text-transform: uppercase;
      }
      &--ratings {
        color: yellow;
        font-size: 19px;
        i {
            display: inline-block;
            margin-right: 10px;
        }
      }
    }

    &__image-container {
      width: 100%;
      height: 64%;
      background-position: top;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;

      &-overlay {
        background-color: rgba(12, 15, 38, 0.42);
        width: 100%;
        height: 100%;
      }
    }

    &__tagline {
      position: absolute;
      bottom: -7px;
      left: 3rem;
      font-size: 15px;
      text-transform: uppercase;
      font-style: italic;
      color: #242126;
      background-color: #faca31;
      padding: 10px 20px;
      border-radius: 3px;
      box-shadow: 0 0.7rem 1rem rgba(0, 0, 0, 0.3);
    }
    &__body {
      display: flex;
      justify-content: space-between;
    }

    &__header,
    &__body,
    &__overview {
      padding: 5px 30px;
    }

    &__overview {
      color: #7678fb;
      font-style: italic;
    }


  }
`

export default MovieInfoStyle
