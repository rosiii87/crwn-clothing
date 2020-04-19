import React from 'react';
import Fade from 'react-reveal/Fade';

import {
  FullWidthContainer,
  MiddleContainer,
  TextContainer,
  EmptyContainer,
  Title,
  Text,
  Button,
} from './hp-category.styles';

const HpCategory = () => (
  <FullWidthContainer black>
    <MiddleContainer>
      <Fade bottom>
        <EmptyContainer />
      </Fade>
      <TextContainer>
        <Fade bottom>
          <Title>
            THE WITCHER
            <br />-
          </Title>
        </Fade>
        <Fade bottom>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            provident, voluptatum temporibus tenetur qui soluta molestias labore
            ipsa totam aliquam incidunt dignissimos voluptate. Dolores quibusdam
            dolorum aut minima, dolor neque?
          </Text>
        </Fade>
        <Fade bottom>
          <Button black>ZOBRAZIT</Button>
        </Fade>
      </TextContainer>
    </MiddleContainer>
  </FullWidthContainer>
);

export default HpCategory;
