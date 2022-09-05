import React from 'react';

import { PracticeLibraries } from '@components/practice-libraries';
import { IPracticeLibraryProps } from '@components/practice-libraries/practice-library/practice-library.typings';

import { StyledDashboard as Styled } from './dashboard.styles';

const libraries: IPracticeLibraryProps[] = [
  {
    image: 'https://i.postimg.cc/pVfG29Wq/n1.jpg',
    type: 'Reconnect',
    title: 'Air Air Air Air Air Air Air Air Awareness',
    description:
      'Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice',
  },
  {
    image: 'https://i.postimg.cc/C5S4ZNhJ/n2.jpg',
    type: 'Reconnect2',
    title: 'Air Awareness2',
    description:
      'Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice ',
  },
  {
    image: 'https://i.postimg.cc/GhMj2GZJ/n3.jpg',
    type: 'Reconnect3',
    title: 'Air Awareness3',
    description:
      'Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice',
  },
  {
    image: 'https://i.postimg.cc/NM76wH6X/n4.webp',
    type: 'Reconnect4',
    title: 'Air Awareness4',
    description:
      'Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice',
  },
];

export const Dashboard: React.FC = () => {
  return (
    <Styled.Dashboard>
      <PracticeLibraries title="Picked For You" libraries={libraries} />
      <PracticeLibraries title="Based on Your Mood" libraries={libraries} isWithForwardArrow />
    </Styled.Dashboard>
  );
};
