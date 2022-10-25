import React, { useEffect, useState } from 'react';
import Pdf from 'react-native-pdf';
import storage from '@react-native-firebase/storage';

import { BackButton } from '@components/molecules/back-button';

import { pdfStyles, StyledTermsOfServices as Styled } from './terms-of-services.styles';

export const TermsOfServices: React.FC = () => {
  const [policyUrl, setPolicyUrl] = useState<string>('');

  const getPDF = async () => {
    const pdf = storage().ref('Terms of Services/Terms of Services.pdf');
    const pdfUrl = await pdf.getDownloadURL();
    setPolicyUrl(pdfUrl);
  };

  useEffect(() => {
    getPDF();
  }, []);

  return (
    <Styled.TermsOfServices>
      <Styled.Header>
        <BackButton height={24} width={24} color="cloudyGreen" />
        <Styled.Title isCentered isBold fontSize={20}>
          Terms of Services
        </Styled.Title>
      </Styled.Header>

      <Pdf
        source={{
          uri: policyUrl,
        }}
        style={pdfStyles}
        trustAllCerts={false}
      />
    </Styled.TermsOfServices>
  );
};
