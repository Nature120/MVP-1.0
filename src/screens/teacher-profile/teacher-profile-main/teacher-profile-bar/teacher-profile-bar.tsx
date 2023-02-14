import React from 'react';

import { TeacherProfileBarStyled as Styled } from './teacher-profile-bar.styles';

interface IProp {
  setCheckedButton: (button: string) => void;
  isPracticesButton: boolean;
}

export const TeacherProfileBar: React.FC<IProp> = ({ setCheckedButton, isPracticesButton }) => {
  const onPressButtonBar = (button: string) => {
    setCheckedButton(button);
  };

  return (
    <Styled.Container>
      <Styled.Button onPress={() => onPressButtonBar('Practices')}>
        <Styled.ButtonText isActive={isPracticesButton}>Practices</Styled.ButtonText>
        {isPracticesButton && <Styled.UnderLine />}
      </Styled.Button>
      <Styled.Button onPress={() => onPressButtonBar('About')}>
        <Styled.ButtonText isActive={!isPracticesButton}>About</Styled.ButtonText>
        {!isPracticesButton && <Styled.UnderLine />}
      </Styled.Button>
    </Styled.Container>
  );
};
