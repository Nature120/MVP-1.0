import { useState } from 'react';

import { IPickers } from './modal-change-immersion.types';

import { useOpenCloseModal } from '@services/hooks/open-close';

export const useModalChangeImmersion = (setImmersion: React.Dispatch<React.SetStateAction<number>>) => {
  const { isOpen, onOpen, onClose } = useOpenCloseModal();
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const onDone = () => {
    const immersionTime = hours * 60 + minutes;
    setImmersion(immersionTime);
    onClose();
  };

  const pickers: IPickers[] = [
    { title: 'Minutes', data: [...new Array(60)], defaultIndex: minutes, onChange: setMinutes },
    { title: 'Hours', data: [...new Array(25)], defaultIndex: hours, onChange: setHours },
  ];

  return { pickers, modalChange: { isOpen, onOpen, onClose, onDone } };
};
