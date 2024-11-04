import styled from 'styled-components';

interface ButtonProps {
  $active: boolean;
}

export const CardWrapper = styled.div`
  width: 338px;
  height: 603px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 20px;
  padding: 25px 24px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ProductImg = styled.img`
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;

export const ProductName = styled.h3`
  line-height: 22px;
  margin-bottom: 30px;
  font-size: ${({theme}) => theme.fontSize.basic};
`;

export const ProductAttribute = styled.p`
  color: ${({theme}) => theme.colors.attr};
  font-size: ${({theme}) => theme.fontSize.small};
  line-height: 18px;
  font-weight: 700;
`;

export const AttributeValue = styled.span`
  color: ${({theme}) => theme.colors.dark};
`;

export const ProductEnergeticClass = styled(ProductAttribute)`
  margin: 20px 0;
`;

export const EnergeticClass = styled.div`
  background-color: ${({theme}) => theme.colors.energetic};
  color: ${({theme}) => theme.colors.white};
  width: 35px;
  height: 18px;
  display: flex;
  padding-left: 7px;
  align-items: center;
  margin-left: 10px;
  border-right: 1px;
  position: relative;
  font-size: ${({theme}) => theme.fontSize.small};
  &::after {
    content: '';
    position: absolute;
    right: -18px;
    top: 50%;
    transform: translateY(-50%);
    border-width: 9px;
    border-style: solid;
    border-color: transparent transparent transparent ${({theme}) => theme.colors.energetic};
`;

export const EnergeticClassWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PriceElement = styled.p`
  font-size: ${({theme}) => theme.fontSize.title};
  font-weight: 700;
`;

export const CurrencyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 5px;
`;

export const CurrencyElement = styled.p`
  font-size: ${({theme}) => theme.fontSize.mobile};
  font-weight: 700;
`;

export const LoanElement = styled.p`
  color: ${({theme}) => theme.colors.loan};
  font-size: ${({theme}) => theme.fontSize.loanInfo};
  font-weight: 700;
  line-height: 18px;
`

export const ButtonElement = styled.button<ButtonProps>`
  width:150px;
  height: 36px;
  padding: 14px 40px;
  border-radius: 24px;
  border: none;
  color: ${({theme}) => theme.colors.white};
  background-color: ${(props) => props.$active ? props.theme.colors.active : props.theme.colors.dark};
  cursor: pointer;
  font-size: ${({theme}) => theme.fontSize.mobile};
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 25px;
  left: calc(50% - 75px);
`;
