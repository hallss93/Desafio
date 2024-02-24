import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  padding-right: 24px;
  padding-left: 24px;
  overflow-y: auto;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 16px;
`;
