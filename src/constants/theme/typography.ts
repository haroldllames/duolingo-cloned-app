export const fonts = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  semiBold: 'Poppins-SemiBold',
  bold: 'Poppins-Bold',
} as const;

export const fontSizes = {
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 16,
  bodyLg: 16,
  bodyMd: 14,
  bodySm: 13,
  caption: 11,
} as const;

export const lineHeights = {
  h1: 38.4,   // 32 * 1.2
  h2: 31.2,   // 24 * 1.3
  h3: 26,     // 20 * 1.3
  h4: 22.4,   // 16 * 1.4
  bodyLg: 25.6, // 16 * 1.6
  bodyMd: 22.4, // 14 * 1.6
  bodySm: 20.8, // 13 * 1.6
  caption: 15.4, // 11 * 1.4
} as const;

export const fontWeights = {
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
} as const;
