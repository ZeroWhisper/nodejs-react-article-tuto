import styled from "styled-components";
// import styles from "styles";

export const Box = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 15% 10px;
  border: 1px solid red;
`;

export const BoxLoginCenter = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 0 20px;
`;

export const TitleLogin = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0;
  color: white;
  font-size: 22px;
  font-family: sans-serif;
`;

export const BoxLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const BoxLoginInput = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 5px 20px;
  background-color: #1daa6a;
  border-radius: 4px;
  padding: 2px 0;

  input {
    flex: 8;
    height: 40px;
    border: 0;
    padding: 0px 20px;
    background-color: #1daa6a;
    color: white;
    &::placeholder {
      color: white;
    }
  }

  p {
    flex: 1;
    color: white;
  }
`;

export const BoxLoginSubmit = styled.button`
  display: flex;
  flex: 1;
  width: 100%;
  border-radius: 4px;
  background-color: white;

  justify-content: center;
  align-items: center;
  margin: 15px 20px;

  height: 40px;
  color: #1daa6a;
  font-family: sans-serif;
  /* border: 1px solid red; */

  &:hover {
    background-color: #ccc;
  }
`;
