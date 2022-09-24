import React, { useState, useRef } from 'react';
import {Avatar} from '@mui/material';


import StyledBadge from '../atoms/StyledBadge';
//import profilePic from 'https://stg0chbot0tec0prod.blob.core.windows.net/bot-imagen/BotImage.png';

function LinksBar() {
  const avatarRef = useRef(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handlePopoverClose = () => {
    setPopoverOpen(false);
  };

  return (
    <>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar src="https://stg0chbot0tec0prod.blob.core.windows.net/bot-imagen/BotImage.png" sx={{ width: 50, height: 50 }} /> 
        </StyledBadge>
 
    </>
  );
}

export default LinksBar;
