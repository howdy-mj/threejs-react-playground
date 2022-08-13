import { Canvas } from '@react-three/fiber';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeProvider = (Story, context) => {
  return (
    <Canvas>
      <Story {...context} />
    </Canvas>
  );
};
export const decorators = [withThemeProvider];
