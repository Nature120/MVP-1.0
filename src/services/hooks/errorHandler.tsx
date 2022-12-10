import { useState } from 'react';

import { ERROR_CODES } from '@constants/error-codes';

import { IERROR_CODES } from '@typings/error-codes-typings';

export const useErrorHandler = () => {
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const handleError = (code: string) => {
    setErrorMessage(ERROR_CODES[code as keyof IERROR_CODES]);
  };

  const resetError = (): void => {
    setErrorMessage(null);
  };
  return { handleError, resetError, errorMessage };
};
