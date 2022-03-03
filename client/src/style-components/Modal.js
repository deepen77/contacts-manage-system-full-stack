import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;

  h2,
  span,
  p {
    padding: 15px 0;
    color: whitesmoke;
  }

  /* span {
    display: block;
  } */

  .modal__smile {
    display: block;
    font-size: 50px;
    padding-top: 0;
  }

  .modal__close__button {
    width: 250px;
    border: none;
    color: #fff;
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-family: "Inter";
    font-weight: 400;
    background: radial-gradient(
      circle,
      rgba(94, 94, 99, 1) 0%,
      rgba(44, 52, 62, 1) 0%,
      rgba(55, 66, 79, 1) 100%
    );
  }

  .modal__content {
    position: fixed;
    background: radial-gradient(
      circle,
      rgba(94, 94, 99, 1) 0%,
      rgba(75, 87, 101, 1) 0%,
      rgba(55, 66, 79, 1) 100%
    );
    width: 500px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }

  @media only screen and (max-width: 750px) {
    .modal__content {
      width: 90%;
      height: 200px;
    }
    .modal__smile {
      font-size: 30px;
    }
    h2 {
      font-size: 20px;
      padding: 5px;
    }
    p {
      padding: 5px;
    }
  }
`;
