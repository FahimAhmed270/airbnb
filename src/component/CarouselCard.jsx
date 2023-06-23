import React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// mui icons
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';

// 3rd party
import SwipeableViews from 'react-swipeable-views';

// react icons
import { AiFillStar } from 'react-icons/ai';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import {flexBetween, dFlex,carouselDot,fixedIcon,carouselImage,fixedBottom} from '../theme/CommonStyle';
import './CarouselCard.css';
import { Checkbox } from '@mui/material';

const CarouselCard = ({ location }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = location.locationImages.length; // so that we know how many dots

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1); // jumps when we click the next arrow
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1); // when we click the back arrow
  };

  const handleStepChange = (step) => {
    setActiveStep(step); // handle swipe change
  };
  return (
    <Box
      className="carouselCard"
      sx={{
        flexGrow: 1,
        position: 'relative',
      }}
    >
      <Box sx={fixedIcon}>
      <Checkbox size='20' icon={<FaRegHeart />} checkedIcon={<FaHeart />} />
      </Box>

      

      {location.locationImages.length && (
        <SwipeableViews
          axis={'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {location.locationImages.map((step, id) => {
            return (
              <div key={step.id}>
                <Box
                  component="img"
                  sx={carouselImage}
                  src={step.url}
                  alt={step.id}
                ></Box>
              </div>
            );
          })}
        </SwipeableViews>
      )}

      <Box sx={fixedBottom}>
        <MobileStepper
          sx={{ backgroundColor: 'transparent' }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              sx={carouselDot}
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <MdKeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              sx={carouselDot}
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <MdKeyboardArrowLeft />
            </Button>
          }
        />
      </Box>

      <Box sx={flexBetween }>
        <Box sx={{ mt: 2 }}>
          <Typography style={{ fontWeight:'600', fontFamily:'Poppins'}}>{location.location}</Typography>
          <Typography style={{ fontWeight:'400', fontFamily:'Poppins'}}>{location.days}</Typography>
          <Typography style={{ fontWeight:'400', fontFamily:'Poppins'}}>{location.price}</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Box sx={ dFlex }>
            {location.isNew ? (
              <>
                <Typography variant='h5'>New</Typography>
                <AiFillStar size={18} />
              </>
            ) : (
              <>
                <Typography variant='h5'>{location.rating}</Typography>
                <AiFillStar size={18} />
              </>
            )
            }
          </Box>
        </Box>
      </Box>

    </Box>
  );
};

export default CarouselCard;