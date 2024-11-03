import styled from 'styled-components';

export const SearchWrapper = styled.div`
  padding: 20px 0 40px;
  display: flex;
  justify-content: center;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const StyledInput = styled.input`
  border: none;
  padding: 5px;
  width: 249px;
  font-size: ${({theme}) => theme.fontSize.mobile};
  height: 36px;
  &::placeholder
    color: ${({theme}) => theme.colors.dark};
`;
