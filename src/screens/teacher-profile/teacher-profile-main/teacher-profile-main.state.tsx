import { useState } from 'react';

export const useTeacherProfileMainState = () => {
  const [checkedButton, setCheckedButton] = useState<string>('Practices');

  return { checkedButton, setCheckedButton };
};
