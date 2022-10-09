/* eslint-disable default-case */
import styled, { css } from "styled-components";

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .FormContainer {
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 22px;
    width: 339px;
    height: 472px;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 20px;
  }

  .FormContainer >button{

width: 100%;
height: 48px;
background: #868E96;
border: 1.2182px solid #868E96;
border-radius: 4px;
font-family: 'Inter';
font-weight: 500;
font-size: 16px;
line-height: 26px;
color: #F8F9FA;
cursor: pointer;
  }

  .Title {
    margin: 37px 0 35px 0;
    width: 100%;
    text-align: center;
  }
  .Title2 {
    margin: 22px 0px 4px;
  }
  .LoginForm {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .LoginForm > label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    width: 100%;
    color: #f8f9fa;
  }
  .LoginForm > input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;

    width: 90%;
    height: 48px;
    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    margin: 22px 0 26px;
    outline: 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    color: #f8f9fa;
  }
  .LoginForm > button {
    padding: 0px 22.3336px;
    width: 100%;
    height: 48px;
    background: #ff577f;
    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
    font-family: "Inter";
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    transition: 0.5s ease;
    cursor: pointer;
  }
  .LoginForm > button:hover {

    background-color: white;
    border: 1.2182px solid white;
    color:#ff577f;
    
  }
  .LoginSpan{
    font-family: 'Inter';
font-weight: 600;
font-size: 12px;
color: #868E96;
cursor: pointer;
margin-top:15px;

  }
`;
