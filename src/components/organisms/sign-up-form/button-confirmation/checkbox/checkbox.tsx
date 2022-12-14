import React from 'react';

import { Icon } from '@components/atoms/icon';

export const Checkbox = ({
  isChecked,
  isWarningCheckBoxBorder,
}: {
  isChecked: boolean;
  isWarningCheckBoxBorder: boolean;
}) => {
  return (
    <>
      {isChecked ? (
        <Icon type="checked" colorIcon="blue" width={24} height={24} />
      ) : (
        <Icon type="unchecked" colorIcon={isWarningCheckBoxBorder ? 'red' : 'darkBlue'} width={24} height={24} />
      )}
    </>
  );
};
