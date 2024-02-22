/* eslint-disable @typescript-eslint/no-empty-interface */
import { defaultTheme } from '@/presentation/styles/theme';

type ThemeInterface = typeof defaultTheme;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
