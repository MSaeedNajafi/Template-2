import styled from "styled-components";
import { Link } from "react-router-dom";
import COL from "../Colors";

export const Container = styled.div`
  min-height: 800px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  // position: relative;
  // z-index: 1;

  background: linear-gradient(
    180deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: ${COL.signinIconColor};
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 400px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormCotent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: ${COL.formBckGround};
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  // margin-bottom: 8px;
  font-size: 20px;
  color: ${COL.formH1Color};
  font-weight: 400;
  text-align: center;
  padding: 18px;
  // margin-top: -50px;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: ${COL.formH1Color};
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: ${COL.formBtnBckColor};
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: ${COL.formBtnTextColor};
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: ${COL.formSpanColor};
  font-size: 14px;
`;
