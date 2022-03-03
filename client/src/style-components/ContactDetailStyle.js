import styled from "styled-components";

export const ContactDetailStyle = styled.div`
  .card {
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px rgb(88, 79, 79) solid;
    align-content: center;
    margin: 0 auto;
  }

  .card-header {
    height: 30%;
    background: #5d6770;
    color: white;
    text-align: center;
  }

  .card-header p {
    font-size: 20px;
  }

  .container {
    padding: 4px 16px;
  }

  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    .card {
      width: 80%;
    }
  }
`;
