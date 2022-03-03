import styled from "styled-components";

export const LoaderStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  z-index: 9999;

  .bouncing-loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    margin: 40px auto;
  }

  .bouncing-loader > div {
    width: 16px;
    height: 16px;
    margin: 3px 6px;
    border-radius: 50%;
    background-color: #a3a1a1;
    opacity: 1;
    animation: bouncing-loader 0.6s infinite alternate;
  }

  @keyframes bouncing-loader {
    to {
      opacity: 0.1;
      transform: translateY(-16px);
    }
  }

  .bouncing-loader > div:nth-child(2) {
    animation-delay: 0.2s;
  }

  .bouncing-loader > div:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
