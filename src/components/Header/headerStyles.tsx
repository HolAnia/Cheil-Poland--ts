import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: ${({theme}) => theme.colors.white};
  padding: 20px 0;
`;

export const BannerText = styled.h1`
  font-size: ${({theme}) => theme.fontSize.title};
  line height: 56px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: ${({theme}) => theme.fontSize.mobileTitle};
  }
`;
