import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import Carousel from '../components';
import withDocsCustom from './utils/withDocsCustom';
import CarouselReadme from '../docs/Carousel.md';

const slides = [
  {
    img: 'https://loremflickr.com/640/360',
    label: 'the cat1',
  },
  {
    img: 'https://loremflickr.com/640/360',
    label: 'the cat2',
  },
  {
    img: 'https://loremflickr.com/640/360',
    label: 'the cat3',
  },
];

storiesOf('Carousel/ default', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocsCustom(CarouselReadme))
  .add('default', () => (
    <Carousel slides={slides} />
  ));
