import React from 'react';
import { Box } from '@mui/material';

interface Props {

}

export const ContainerWithRoundedBorder = (props: React.PropsWithChildren<Props>) => {
  const containerStyle = {
    width: 1300,
    margin: '0 auto', // Center the container horizontally
    borderRadius: 8,
    border: '1px solid #000',
    padding: '50px 0px'
  };

  return (
    <Box sx={containerStyle}>
      {props.children}
    </Box>
  );
};
