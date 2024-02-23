import styled from 'styled-components';

export const SideMenuContainer = styled.aside`
  width: 12vw;
  min-width: 196px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 1px 3px rgba(0, 0, 0, 0.12);
  padding: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  overflow-y: auto;
`;

export const Divider = styled.hr`
  width: 100%;
  border: 0;
  min-height: 1px;
  background-color: #e0dfe0;
  margin: 0;
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  font-style: normal;
  font-weight: 400;
  margin-top: 2rem;
`;

export const MenuItem = styled.div(
  ({ isSelected }: { isSelected: boolean }) => `
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: 0.17px;
    color: rgba(0, 0, 0, 0.87);
    cursor: pointer;
    padding: 0.8rem;
    border-radius: 4px;
    user-select: none;
    overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover {
      background-color: rgba(0, 0, 0, 0.045);
    }
    ${
      isSelected &&
      `
        background-color: #da185714;
    `
    }
`,
);

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
