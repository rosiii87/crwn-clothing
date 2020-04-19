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
  <FullWidthContainer>
    <MiddleContainer>
      <TextContainer>
        <Fade bottom>
          <Title>
            RICK &amp; MORTY
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
          <Button>ZOBRAZIT</Button>
        </Fade>
      </TextContainer>
      <Fade bottom>
        <EmptyContainer />
      </Fade>
    </MiddleContainer>
  </FullWidthContainer>
);

export default HpCategory;
