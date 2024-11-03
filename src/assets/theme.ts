interface Colors {
  dark: string;
  attr: string;
  white: string;
  background: string;
  hover: string;
  energetic: string;
  loan: string;
  active: string;
  checked: string;
  seemore: string;
}

interface FontSize {
  basic: string;
  title: string;
  mobileTitle: string;
  mobile: string;
  small: string;
  loanInfo: string;
  extraSmall: string;
}

export interface Theme {
  colors: Colors;
  fontSize: FontSize;
}

const theme: Theme = {
  colors: {
    dark: '#000',
    attr: '#767676',
    white: '#fff',
    background: '#F8F8F8',
    hover: '#F3F3F3',
    energetic: '#009949',
    loan: '#555',
    active: '#1428A0',
    checked: '#1C1C1C',
    seemore: '#007AFF',
  },
  fontSize: {
    basic: '18px',
    title: '40px',
    mobileTitle: '32px',
    mobile: '14px',
    small: '12px',
    loanInfo: '16px',
    extraSmall: '8px',
  },
};

export default theme;
