import styled from "@emotion/styled";

export const Button = styled.button`
  @media (max-width: 700px) {
    font-size: 18px;
  }
  display: block;
  margin: 10px 10px 0px 0px;
  width: 130px;
  height: 48px;
  padding: 10px 20px 20px 20px;
  background: #ccdeff;
  border-radius: 26px;
  border-width: 0;
  text-align: right;
  line-height: normal;
  text-decoration: none important!;
  font-size: 21px;
  font-weight: 700;
  text-transform: uppercase;
  color: #121212;
`;

export const LinkButton = styled.a`
  display: block;
  margin: 10px 10px 0px 0px;
  height: 57px;
  padding: 10px 30px 10px 30px;
  background: #38f;
  border-radius: 26px;
  border-width: 0;
  text-align: center;
  content-align: center;
  line-height: normal;
  text-decoration: none important!;
  font-size: 26px;
  font-weight: 700;
  text-transform: uppercase;
  color: #121212;
  align-self: center;
  text-decoration: none;
`;

export const Control = styled.button`
  display: block;
  margin: 10px 10px 0px 0px;
  padding: 10px 20px 20px 20px;
  border-radius: 26px;
  border-width: 0;
  text-align: right;
  line-height: normal;
  text-transform: uppercase;
`;

export const Tag = styled.button`
  border-radius: 10px;
  background-color: #ca8;
  border-width: 0;
`;

export const Listing = styled.button`
  @media (max-width: 1000px) {
    font-size: 20px;
  }
  @media (max-width: 900px) {
    font-size: 16px;
  }
  @media (max-width: 700px) {
    font-size: 12px;
  }
  @media (max-width: 450px) {
    font-size: 10px;
  }
  border-width: 0px 0px 1px 10px;
  margin: 10px 0px 0px 0px;
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: inherit;
  border-color: #ccdeff;
  text-decoration: none;
`;

export const WholePage = styled.div`
  min-height: 100%;
  padding: 10px 5% 5% 10px;
  align-content: center;
`;

export const ButtonList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;
