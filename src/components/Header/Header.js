import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: darkblue;
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  color: white;
  opacity: 0.8;
`;
const Name = styled.h1`
  margin: 0;

  font-size: 45px;
`;

const Title = styled.h2`
  margin: 0;

  font-size: 20px;
  font-weight: 200;
`;

function Header() {
  return (
    <HeaderContainer>
      <InfoContainer>
        <Name>PAU IBÁÑEZ</Name>
        <Title>Web Developer</Title>
      </InfoContainer>
    </HeaderContainer>
  );
}

export default Header;
