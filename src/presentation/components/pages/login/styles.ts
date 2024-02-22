import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  background: var(--evm-background-main);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ColumnFirst = styled.form`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 48px 24px;
  background: white;
  height: calc(100vh - 48px - 48px);
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 45px;
  margin-bottom: 15px;
`;
