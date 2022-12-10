import React from 'react';
import { TextInput } from 'react-native-paper';
import { Formik } from 'formik';

import { Button } from '@components/atoms/button';
import { Icon } from '@components/atoms/icon';
import { useStateDeleteConfirmForm } from './delete-confirm-form.state';

import { IMAGES } from '@constants/images';

import { DeleteConfirmFormStyled as Styled } from './delete-confirm-form.styles';
import { REACT_NATIVE_PAPER_INPUT_THEME } from '@theme/styles';

import { COLOR } from '@theme/colors';

interface IProp {
  resetError: () => void;
  errorMessage: string | null;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onPressSocialBtn: () => Promise<void>;
}

export const DeleteConfirmForm: React.FC<IProp> = ({ resetError, errorMessage, setPassword, onPressSocialBtn }) => {
  const { passwordVisible, changeVisiblePassword, onSubmit } = useStateDeleteConfirmForm({
    setPassword,
    onPressSocialBtn,
  });

  const handleChangeIcon = (): JSX.Element => {
    return passwordVisible ? (
      <Styled.ClosedEye source={IMAGES.closedEye} />
    ) : (
      <Icon type="openEye" width={24} height={24} colorIcon="grey" />
    );
  };

  return (
    <Styled.Container>
      <Formik initialValues={{ password: '' }} onSubmit={onSubmit}>
        {({ handleChange, handleBlur, values, errors, handleSubmit }) => {
          return (
            <>
              <Styled.InputPassword
                placeholderTextColor={COLOR.font.lightGrey}
                theme={REACT_NATIVE_PAPER_INPUT_THEME}
                underlineColor="transparent"
                selectionColor={COLOR.font.lightGrey}
                activeUnderlineColor="transparent"
                placeholder="Password"
                value={values.password}
                onFocus={resetError}
                caretHidden={false}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry={passwordVisible}
                right={<TextInput.Icon onPress={changeVisiblePassword} name={handleChangeIcon} />}
              />
              <Styled.ErrorText>{errors.password ? errors.password : '' || errorMessage}</Styled.ErrorText>
              <Button buttonText="Delete account" buttonColor="blue" onPress={handleSubmit} />
            </>
          );
        }}
      </Formik>
    </Styled.Container>
  );
};
