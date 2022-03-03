import styled from "styled-components";

export const SectionStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 70px 20px 70px 20px;
  //border: 1px solid red;
  border-radius: 5px;
  background-color: #f6f6f6;
  max-width: 1200px;

  a {
    text-decoration: none;
    list-style-type: none;
  }

  @media only screen and (max-width: 900px) {
    width: 95%;
    top: 55%;
  }
`;





export const SectionPanelStyle = styled.div`
  margin-top: 200px;
  max-width: 1200px;
  margin: 200px auto;

  a {
    text-decoration: none;
    list-style-type: none;
  }

  @media only screen and (max-width: 900px) {
    margin-top: 100px;
  }
`;

export const SectionTitleStyle = styled.h2`
  padding: 20px;
  color: #3183ff;
`;

export const SectionInputLabel = styled.label`
  width: 100%;
  height: 50px;
  margin-bottom: 40px;
`;

export const SectionInputStyle = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  border: 1px solid #f6f6f6;
  padding-left: 15px;


  ::placeholder,
  ::-webkit-input-placeholder {
    color: gray;
    //padding: 20px;
  }
  :-ms-input-placeholder {
    color: gray;
  }
`;

export const SectionInputLabelCheckbox = styled.div`
  //border: 1px solid red;
  margin-bottom: 20px;
  .control {
    font-family: arial;
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 5px;
    padding-top: 3px;
    cursor: pointer;
    font-size: 15px;
  }
  .control input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .control_indicator {
    position: absolute;
    top: 2px;
    left: 0;
    height: 20px;
    width: 20px;
    background: #e6e6e6;
    border: 0px solid #000000;
    border-radius: 0px;
  }
  .control:hover input ~ .control_indicator,
  .control input:focus ~ .control_indicator {
    background: #cccccc;
  }

  .control input:checked ~ .control_indicator {
    background: #3183ff;
  }
  .control input:disabled ~ .control_indicator {
    background: #e6e6e6;
    opacity: 0.6;
    pointer-events: none;
  }
  .control_indicator:after {
    box-sizing: unset;
    content: "";
    position: absolute;
    display: none;
  }
  .control input:checked ~ .control_indicator:after {
    display: block;
  }
  .control-checkbox .control_indicator:after {
    left: 8px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  .control-checkbox input:disabled ~ .control_indicator:after {
    border-color: #7b7b7b;
  }
`;
