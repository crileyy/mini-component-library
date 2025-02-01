/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  let ProgressBarWrapper;
  let ProgressBarValue;
  if (size === 'large') {
    ProgressBarWrapper = LargeProgressBarWrapper;
    ProgressBarValue = LargeProgressBarValue;
  } else if (size === 'medium') {
    ProgressBarWrapper = MediumProgressBarWrapper;
    ProgressBarValue = MediumProgressBarValue;
  } else if (size === 'small') {
    ProgressBarWrapper = SmallProgressBarWrapper;
    ProgressBarValue = SmallProgressBarValue;
  } else {
    throw new Error('invalid size');
  }
  return (
    <ProgressBarWrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemax={100}
      aria-valuemin={0}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <ProgressBarValue value={value} style={{ '--progress-width': value + '%' }} />
    </ProgressBarWrapper>);
};

const SmallProgressBarValue = styled.div`
  width: var(--progress-width);
  height: 8px;
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`

const SmallProgressBarWrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
  height: 8px;
  overflow: hidden;
`;

const MediumProgressBarValue = styled(SmallProgressBarValue)`
  height: 12px;
`

const MediumProgressBarWrapper = styled(SmallProgressBarWrapper)`
  height: 12px;
`;

const LargeProgressBarValue = styled(SmallProgressBarValue)`
  height: 16px;
`

const LargeProgressBarWrapper = styled(SmallProgressBarWrapper)`
  height: 24px;
  border-radius: 8px;
  padding: 4px;
`;

export default ProgressBar;
