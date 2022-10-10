import React, { useEffect, useState } from 'react';
import Pdf from 'react-native-pdf';
import storage from '@react-native-firebase/storage';

import { BackButton } from '@components/molecules/back-button';

import { pdfStyles, StyledPrivacyPolicy as Styled } from './privacy-policy.styles';

export const PrivacyPolicy: React.FC = () => {
  const [policyUrl, setPolicyUrl] = useState<string>('');

  const getPDF = async () => {
    const pdf = storage().ref('Privacy Policy/privacy policy.pdf');
    const pdfUrl = await pdf.getDownloadURL();
    setPolicyUrl(pdfUrl);
  };

  useEffect(() => {
    getPDF();
  }, []);

  return (
    <Styled.PrivacyPolicy>
      <Styled.Header>
        <BackButton height={24} width={24} color="cloudyGreen" />
        <Styled.Title isCentered isBold fontSize={20}>
          Privacy Policy
        </Styled.Title>
      </Styled.Header>

      <Pdf
        source={{
          uri: policyUrl,
        }}
        style={pdfStyles}
        trustAllCerts={false}
      />
    </Styled.PrivacyPolicy>
  );
};
