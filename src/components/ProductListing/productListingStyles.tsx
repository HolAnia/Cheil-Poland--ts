import styled from 'styled-components'

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const AllProducts = styled.p`
  font-size: ${({theme}) => theme.fontSize.mobile};
  font-weight: 400;
  line-height: 22px;
  margin: 5px 0;
`;

export const ListingWrapper = styled.div`
  max-width: 1046px;
  margin: 0 auto;
  padding: 0 0 40px;
  @media (max-width: 1050px) {
    padding: 0 10px 40px;
  }
`;

export const BtnLoadMore = styled.button`
  margin: 20px auto;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
  border: none;
  background-color: transparent;
  color: ${({theme}) => theme.colors.seemore};
  position: relative;
  display: flex;
  cursor: pointer;
  &::after {
    position: absolute;
    content: '▼';
    color: ${({theme}) => theme.colors.seemore};
    font-size: ${({theme}) => theme.fontSize.extraSmall};
    top: 50%;
    transform: translateY(-50%);
    right: -10px;
  }
`;

export const Empty = styled.p`
  margin: 40px auto;
  color: ${({theme}) => theme.colors.seemore};
  font-weight: 700
`;
