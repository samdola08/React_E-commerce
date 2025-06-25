import React from 'react';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

// Optional: Style empty icons
const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: '#ccc',
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon style={{ color: '#e74c3c' }} />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon style={{ color: '#e67e22' }} />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon style={{ color: '#f1c40f' }} />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon style={{ color: '#2ecc71' }} />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon style={{ color: '#3498db' }} />,
    label: 'Very Satisfied',
  },
};

// ✅ Fixed function without TypeScript types
function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export default function EmojiRating() {
  return (
    <StyledRating
      name="custom-icon-rating"
      defaultValue={3}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
    />
  );
}
