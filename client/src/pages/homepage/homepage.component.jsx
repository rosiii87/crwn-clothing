import React, { Profiler } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

// import Directory from '../../components/directory/directory.component';
import SearchBar from '../../components/search/search.component';
// import Benefits from '../../components/benefits/benefits.component';
import HpCategory from '../../components/hp-category/hp-category.component';
import HpCategory2 from '../../components/hp-category/hp-category2.component';
import HpSearch from '../../components/hp-search/hp-search.component';
import LatestContainer from '../../components/latest/latest.component';

import HpCarousel from '../../components/carousel/hp-carousel.component';

import {
  HomePageContainer,
  MiddleContainer,
  WallpaperWall,
  WallTitle,
  WallBannerContainer,
  WallSpan,
  ImagesContainer,
  CategoryContainer,
  CategoryImage,
} from './homepage.styles';

const HomePage = ({ sections, history, match }) => (
  <HomePageContainer>
    <Profiler
      id="Directory"
      // this is another alter. testing besides profiles in chrome
      onRender={(id, phase, actualDuration) => {
        console.log({
          id,
          phase,
          actualDuration,
        });
      }}
    >
      <Helmet>
        <meta
          name="description"
          content="Homepage of CRWN clothing - where to buy style"
        />
      </Helmet>
      <HpCarousel>
        <WallpaperWall>
          <WallBannerContainer>
            <WallTitle>Brouzdejte v kategoriích</WallTitle>
            <WallSpan onClick={() => history.push(`/shop`)}>
              Všechny kategorie zde
            </WallSpan>
            <ImagesContainer>
              {sections
                .filter((section, idx) => idx < 5)
                .map(({ id, imageUrl, title, linkUrl }) => (
                  <CategoryContainer key={id}>
                    <CategoryImage
                      src={imageUrl}
                      onClick={() => history.push(`${match.url}${linkUrl}`)}
                    />
                    <h4>{title}</h4>
                  </CategoryContainer>
                ))}
            </ImagesContainer>
          </WallBannerContainer>
        </WallpaperWall>
        <WallpaperWall>
          <WallBannerContainer>
            <WallTitle>Vítejte na MYWALL.cz</WallTitle>
            <WallSpan>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              obcaecati laboriosam amet voluptas dignissimos nesciunt, quidem
              nulla id corporis non nemo dolor impedit velit. Asperiores,
              aperiam? Harum exercitationem quos eaque!
            </WallSpan>
            <SearchBar />
            <WallSpan style={{ color: '#FFF' }}>
              <strong>
                Již znáte svoji inspiraci? Najděte ji mezi našimi produkty.
              </strong>
            </WallSpan>
          </WallBannerContainer>
        </WallpaperWall>
      </HpCarousel>
      <MiddleContainer>
        <HpSearch />
        {/* <SearchBar /> */}
        {/* <Benefits /> */}
        {/* <Directory sections={sections} /> */}
      </MiddleContainer>

      <HpCategory2 />
      <MiddleContainer>
        <LatestContainer />
      </MiddleContainer>
      <HpCategory />
      <div style={{ height: '50rem' }}></div>
    </Profiler>
  </HomePageContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(HomePage);
