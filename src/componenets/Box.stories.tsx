import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from './Box';

export default {
  title: 'Threejs/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <>
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <pointLight position={[-10, -10, -10]} />
    <Box {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  position: [1, 1, 1],
};
