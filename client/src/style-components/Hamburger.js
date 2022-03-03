import styled from "styled-components";

export const HamburgerStyle = styled.div`
  margin-right: 30px;
  cursor: pointer;
  display: none;

  @media only screen and (max-width: 900px) {
    display: block;
  }

  span {
    width: 40px;
    height: 2px;
    border-radius: 2px;
    background-color: #718096;
    display: block;
    margin: 8px;
    transition: all 0.3s ease-in-out;
  }

  .is-active {
    animation: smallbig 0.6s forwards;
  }

  @keyframes smallbig {
    0%,
    100% {
      transform: scale(1);
    }

    50% {
      transform: scale(0);
    }
  }

  .is-active span:nth-child(1),
  .is-active span:nth-child(2),
  .is-active span:nth-child(3) {
    transition-delay: 0.2s;
  }

  .is-active span:nth-child(2) {
    opacity: 0;
  }

  .is-active span:nth-child(1) {
    transform: translateY(13px) rotate(45deg);
  }

  .is-active span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
`;
