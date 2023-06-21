import styled from "styled-components";
import picture from "../../asset/illustration-dashboard.png";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 80px 0 40px 0;
`;
export const StyledHeader = styled.header``;
export const StyledMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 700px;
  padding-top: 40px;
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
  }
`;
export const SubTitle = styled.h2`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: var(--dark-blue);
  margin-bottom: 40px;
`;
export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;
export const IconContainer = styled.div`
  display: flex;
  gap: 25px;
  color: var(--blue);
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
`;
