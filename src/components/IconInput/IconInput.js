import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    '--icon-size': '16px',
    'font-size': '14px',
    '--icon-bottom': '4px',
    '--wrapper-height': '24px',
    '--underline': '1px',
  },
  large: {
    '--icon-size': '24px',
    'font-size': '18px',
    '--icon-bottom': '6px',
    '--wrapper-height': '36px',
    '--underline': '2px',
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const sizeStyle = STYLES[size];

  return (
    <>
      <Wrapper style={{ '--width': width + 'px', ...sizeStyle }}>
        <IconWrapper style={sizeStyle}>
          <Icon id={icon} strokeWidth={1} size={size === 'small' ? 16 : 24} />
        </IconWrapper>
        <InputWrapper>
          <StyledInput placeholder={placeholder} style={sizeStyle} />
        </InputWrapper>
      </Wrapper>
    </>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: var(--icon-size);
  height: var(--icon-size);
`;

const InputWrapper = styled.div`
  padding-left: 24px;
  padding-top: 4px;
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
  font-weight: 700;
  color: ${COLORS.gray700};
  
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  width: var(--width);
  border-bottom: var(--underline) solid ${COLORS.black};
  position: relative;
  height: var(--wrapper-height);
  
  &:focus-within {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export default IconInput;
