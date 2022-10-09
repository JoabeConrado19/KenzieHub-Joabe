/* eslint-disable default-case */
import styled, { css } from "styled-components";

export const DashboardStyles = styled.div`
  header {
    height: 72px;
    border-bottom: 1px solid #212529;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 50px;
  }
  header > button {
    width: 67.49px;
    height: 40.11px;
    background: #212529;
    border-radius: 4px;
    font-family: "Inter";
    font-weight: 600;
    font-size: 12px;
    text-align: center;
    color: #f8f9fa;
    flex: none;
    order: 0;
    flex-grow: 0;
    cursor: pointer;
  }

  .UserContainer {
    height: 98px;
    border-bottom: 1px solid #212529;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .FormUpper > button {
    padding: 10px;
    background: #212529;
    border-radius: 4px;
    font-family: "Inter";
    font-weight: 600;

    text-align: center;
    color: #f8f9fa;
    flex: none;
    order: 0;
    flex-grow: 0;
    cursor: pointer;
    color: #ffffff;
    font-size: 16px;
  }
  .FormUpper {
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 110px;
  }
  .ul-Container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .ul-Container > ul {
    width: 759px;
    height: 316px;
    background: #212529;
    border-radius: 4px;
    padding: 20px;
  }
  .ul-Container > ul > li {
    height: 49px;
    width: 100%;
    background: #121214;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  .Title-li {
    margin-left: 18px;
  }
  .ul-Container > ul > li > div > span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    color: #868e96;
    margin-right: 25px;
  }
  .ul-Container > ul > li > div > img {
    margin-right: 18px;
  }
  .ModalHeader{
    display: flex;
    justify-content: space-between;
    
  }
  @media (max-width: 751px) {
    .UserContainer {
    height: 98px;
    border-bottom: 1px solid #212529;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;
  }
  header {
    height: 72px;
    border-bottom: 1px solid #212529;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
  .FormUpper {
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 110px;
  }
  
    
  }

`;
