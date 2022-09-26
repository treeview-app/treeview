import * as React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components/native';
import * as NavigationBar from 'expo-navigation-bar';
import type { ThemeMode } from 'theme';
import { defaultThemeMode } from 'theme';
import type { Theme } from '../styles/theme';
import { getTheme } from '../styles/theme';

function ThemeProvider({ children }: React.PropsWithChildren) {
  const [mode, setMode] = React.useState<ThemeMode>(defaultThemeMode);

  const theme = React.useMemo(() => {
    const theme = getTheme(mode);
    NavigationBar.setBackgroundColorAsync(theme.colors.background);
    return theme;
  }, [mode]);

  function switchMode() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, mode, setMode, switchMode }}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
}

const ThemeContext = React.createContext<{
  readonly theme: Theme;
  readonly mode: ThemeMode;
  readonly setMode: (mode: ThemeMode) => void;
  readonly switchMode: () => void;
}>({
  theme: getTheme(defaultThemeMode),
  mode: defaultThemeMode,
  setMode: () => undefined,
  switchMode: () => undefined,
});

export { ThemeContext, ThemeProvider };
