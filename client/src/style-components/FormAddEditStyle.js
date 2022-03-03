import styled from "styled-components";

export const FormStyle = styled.div`

/* margin: auto;
padding: 15px;
max-width: 400px;
align-content: center; */

  input[type="text"],
  input[type="email"],
  input[type="number"],
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type="submit"] {
    width: 100%;
    background-color: #3183ff;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type="button"] {
    width: 100%;
    background-color: #40453e;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    input,
    select,
    textarea {
      font-size: 16px;
    }
  }
`;
