interface ThemeColors {
  primary: string;
  primaryHover: string;
  background: string;
  cardBackground: string;
  text: string;
  textSecondary: string;
  textHighlight: string;
  buttonText: string;
  buttonBackground: string;
  success: string;
  error: string;
}

interface ThemeMetrics {
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
  };
}

export interface Theme {
  colors: ThemeColors;
  metrics: ThemeMetrics;
}

export const theme: Theme = {
  colors: {
    primary: '#E50914',
    primaryHover: '#F40612',
    background: '#141414',
    cardBackground: '#1F1F1F',
    text: '#FFFFFF',
    textSecondary: '#999999',
    textHighlight: '#E5E5E5',
    buttonText: '#FFFFFF',
    buttonBackground: '#404040',
    success: '#46D369',
    error: '#E50914'
  },
  metrics: {
    spacing: {
      small: '8px',
      medium: '16px',
      large: '24px'
    },
    borderRadius: {
      small: '4px',
      medium: '8px',
      large: '16px'
    }
  }
};