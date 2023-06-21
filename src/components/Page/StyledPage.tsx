import styled from "styled-components";
import picture from "../../asset/illustration-dashboard.png";
import pictureMobile from "../../asset/illustration-dashboard-mobile.png";
import { maxMobile } from "../GlobalStyle/helpers";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 80px 0 40px 0;
  @media (max-width: ${maxMobile}) {
    padding: 80px 28px 40px 28px;
  }
`;
export const StyledHeader = styled.header``;
export const StyledMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 700px;
  padding-top: 40px;
  @media (max-width: ${maxMobile}) {
    height: 500px;
    padding-top: 32px;
  }
`;
export const Title = styled.h1`
  font-weight: 300;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  color: var(--gray);
  margin-bottom: 16px;
  span {
    font-weight: 700;
    color: var(--dark-blue);
  }
  ::after {
    content: url(${picture});
    position: absolute;
    display: block;
    left: 0;
    right: 0;
    top: 280px;
    width: 640px;
    height: 383px;
    @media (max-width: ${maxMobile}) {
      content: url(${pictureMobile});
      top: 260px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  @media (max-width: ${maxMobile}) {
    font-size: 22px;
    line-height: 32px;
    margin-bottom: 15px;
  }
`;
export const SubTitle = styled.h2`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: var(--dark-blue);
  margin-bottom: 40px;
  @media (max-width: ${maxMobile}) {
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 32px;
  }
`;
export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  @media (max-width: ${maxMobile}) {
    gap: 27px;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  gap: 25px;
  color: var(--blue);
  @media (max-width: ${maxMobile}) {
    gap: 11px;
  }
  svg {
    width: 31px;
    height: 31px;
  }
`;
export const CopyrightText = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  color: var(--gray);
  @media (max-width: ${maxMobile}) {
    font-size: 10px;
    line-height: 12px;
  }
`;
