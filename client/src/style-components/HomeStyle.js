import styled from "styled-components";

export const HomeStyle = styled.div`
  .welcome {
    font-size: 50px;
    font-weight: 700;
    line-height: 60px;
    text-align: center;
    color: #333333;
    word-break: break-word;
    padding: 50px 0 10px 0;
  }

  .welcome-next {
    font-size: 24px;
    font-weight: 300;
    line-height: 40px;
    text-align: center;
    color: #333333;
    word-break: break-word;
    padding: 50px;
  }

  .logo-welcome-wrapper {
    width: 300px;
    margin: 0 auto;
    padding: 50px;
  }

  .logo-welcome-picture {
    width: 100%;
  }


  @media only screen and (max-width: 750px) {
  .welcome {
  font-size: 32px;
  line-height: 40px;
  padding: 50px 0 10px 0;
}

.welcome-next {
  font-size: 20px;
  padding: 20px;
}

.logo-welcome-wrapper {
  width: 100px;
  padding: 0px;
}
  }

`;
