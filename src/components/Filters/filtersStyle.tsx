import styled from 'styled-components';

export const FiltersWrapper = styled.div`
  max-width: 1032px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 5px 10px;
    justify-content: space-around;
    margin: 20px 0;
  }
`;

export const LabelWrapper = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 700;
  line-height: 22px;
  width: 24%;
  @media (max-width: 768px) {
    justify-content: space-around;
    width: 45%;
    font-size: ${({theme}) => theme.fontSize.mobile};
  }
`;
