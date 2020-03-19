import React, { Profiler } from 'react';
import { Helmet } from 'react-helmet';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <Profiler
      id="Directory"
      // this is another alter. testing besides profiles in chrome
      onRender={(id, phase, actualDuration) => {
        console.log({
          id,
          phase,
          actualDuration
        });
      }}
    >
      <Helmet>
        <meta
          name="description"
          content="Homepage of CRWN clothing - where to buy style"
        />
      </Helmet>
      <Directory />
    </Profiler>
  </HomePageContainer>
);
export default HomePage;
