import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <HiddenSelect value={value} onChange={onChange}>
        {children}
      </HiddenSelect>
      <VisibleSelect>
        <DisplayedValueWrapper>{displayedValue}</DisplayedValueWrapper>
        <DownIcon id="chevron-down" strokeWidth={1} size={24} />
      </VisibleSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  isolation: isolate;
`;

const HiddenSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
  z-index: 1;
`;

const VisibleSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  padding: 12px 16px;
  padding-right: 52px;

  ${HiddenSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${HiddenSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const DisplayedValueWrapper = styled.div`
`;

const DownIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: 24px;
  height: 24px;
  z-index: 0;
`;

export default Select;
