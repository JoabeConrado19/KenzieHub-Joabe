/* eslint-disable default-case */
import styled, { css } from "styled-components";

export const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .FormContainer {
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 22px;
    width: 339px;
    height: auto;
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
  }

  .Title {
    margin: 17px 0 15px 0;

  }
  .Title2 {
    margin: -10px 0px -5px;
  }
  .RegisterForm {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .RegisterForm > label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    width: 100%;
    color: #f8f9fa;
  }
  .RegisterForm > input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    border: none;
    outline: 0;

    width: 90%;
    height: 34px;
    background: #343b41;
    
    border-radius: 4px;
    margin: 10px 0 10px;
    outline: 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    color: #f8f9fa;
  }
  .RegisterForm > button {
    padding: 0px 22.3336px;
    width: 100%;
    height: 34px;
    background: #ff577f;
    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
    font-family: "Inter";
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    transition: 0.5s ease;
  }
  .RegisterForm > button:hover {

    background-color: white;
    border: 1.2182px solid white;
    color:#ff577f;
    
  }
  .RegisterSpan{
    font-family: 'Inter';
font-weight: 600;
font-size: 12px;
color: #868E96;
cursor: pointer;
margin-top:-10px;
margin-bottom: -10px;

  }
 
  .RegisterTitle{

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 384px;
  }
  .RegisterTitle > button{

width: 67.49px;
height: 40.11px;
background: #212529;
border-radius: 4px;
font-family: 'Inter';
font-weight: 600;
font-size: 12px;
text-align: center;
color: #F8F9FA;
flex: none;
order: 0;
flex-grow: 0;
cursor: pointer;
  }
  .RegisterForm > select {
    padding: 0px 16.2426px;
  gap: 10.15px;
  width: 100%;
  height: 34px;
  background: #343B41;
  border: 1.2182px solid #343B41;
  border-radius: 4px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16.2426px;
  color: #868E96;
  margin: 10px 0 15px;
  }

`;
