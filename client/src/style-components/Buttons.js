import styled from "styled-components";

export const SubmitBtnStyle = styled.button`
  padding: 10px 25px;
  border: none;
  background-color: #3183ff;
  color: white;
  border-radius: 5px;
  margin-left: 300px;

  :disabled {
    background-color: #cccccc;
    color: #666666;
  }

  @media only screen and (max-width: 900px) {
    margin-left: 200px;
  }
`;


export const GetStartedBtnStyle = styled.button`
  padding: 16px 32px;
  font-size: 18px;
  border: none;
  background-color: #3183ff;
  color: white;
  border-radius: 40px;
  font-weight: 300;
  line-height: 17px;
  width: 200px;
  display: block;
  margin: 0 auto;

  a {
    text-decoration: none;
    list-style-type: none;
  }
`;

  export const SignUpBtnStyle = styled.button`
    padding: 8px 16px;
    font-size: 14px;
    border: none;
    background-color: #3183ff;
    color: white;
    border-radius: 40px;
    font-weight: 300;
    line-height: 17px;
    width: 130px;
    display: block;
    margin: 0 auto;
    height: 40px;
  `;

  export const PanelBtnStyle = styled.button`
    padding: 8px 16px;
    font-size: 18px;
    border: none;
    background-color: transparent;
    color: #333333;
    border-radius: 40px;
    font-weight: 300;
    line-height: 17px;
    width: 130px;
    display: block;
    margin: 0 auto;
    height: 40px;
    @media only screen and (max-width: 900px) {
      color: #ffffff;
    }
  `;

  export const HomeBtnStyle = styled.button`
    padding: 8px 16px;
    font-size: 18px;
    border: none;
    background-color: transparent;
    color: #333333;
    border-radius: 40px;
    font-weight: 300;
    line-height: 17px;
    width: 130px;
    display: block;
    margin: 0 auto;
    height: 40px;

    @media only screen and (max-width: 900px) {
      color: #ffffff;
    }
  `;

  export const LoginBtnStyle = styled.button`
    padding: 8px 16px;
    font-size: 18px;
    border: none;
    background-color: transparent;
    color: #333333;
    border-radius: 40px;
    font-weight: 300;
    line-height: 17px;
    width: 130px;
    display: block;
    margin: 0 auto;
    height: 40px;
    @media only screen and (max-width: 900px) {
      color: #ffffff;
    }
  `;

  export const LogoutBtnStyle = styled.button`
    padding: 8px 16px;
    font-size: 18px;
    border: none;
    background-color: transparent;
    color: #333333;
    border-radius: 40px;
    font-weight: 300;
    line-height: 17px;
    width: 130px;
    display: block;
    margin: 0 auto;
    height: 40px;
  `;

  export const LoggedInBtnStyle = styled.button`
    padding: 8px 16px;
    font-size: 18px;
    border: none;
    background-color: #7bdfff;
    color: #333333;
    border-radius: 40px;
    font-weight: 300;
    line-height: 17px;
    width: 230px;
    display: block;
    margin: 0 auto;
    height: 40px;
    cursor: not-allowed !important;
  `;

  export const AddContactBtnStyle = styled.button`
    padding: 10px 25px;
    border: none;
    background-color: #3183ff;
    color: white;
    border-radius: 5px;
    margin-bottom: 20px;
    margin: 20px auto;
    display: block;
    a {
      text-decoration: none;
      list-style-type: none;
    }
  `;

  export const GoBackBtnStyle = styled.button`
    width: 100%;
    background-color: #40453e;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  `;