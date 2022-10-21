/* eslint-disable default-case */
import styled, { css } from "styled-components";

interface iStyledTitleProps{
  Title: string;
}


export const StyledTitle = styled.h1<iStyledTitleProps>`
  ${({ Title }) => {
    switch (Title) {
      case "one":
        return css`
          font-size: 26+'px';
          color: #ff577f;
          font-weight: 800;
        `;
      case "two":
        return css`
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 28px;
          color: #f8f9fa;
        `;
      case "three":
        return css`
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 18px;
          color: #f8f9fa;
        `;
      case "four":
        return css`
          font-family: "Inter";
          font-weight: 700;
          font-size: 14.21px;
          color: #ffffff;
        `;
      case "span":
        return css`
          font-family: "Inter";
          font-weight: 400;
          font-size: 12px;
          color: #868e96;
        `;
      case "span-error":
        return css`
          font-family: "Inter";
          font-weight: 300;
          font-size: 12px;
          color: red;
        `;
      case "spanBtn":
        return css`
          font-family: "Inter";
          font-weight: 400;
          font-size: 16px;
          color: #868e96;
          cursor: pointer;
        `;
    }
  }}
`;
