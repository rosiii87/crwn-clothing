import React from 'react';
import { withRouter } from 'react-router-dom';

import Fade from 'react-reveal/Fade';
import { SearchContainer, TagsContainer, TagButton } from './hp-search.styles';
import SearchBar from '../search/search.component';

export const HpSearch = ({ history }) => (
  <SearchContainer>
    <Fade bottom>
      <h1>Hledat mezi produkty</h1>
    </Fade>
    <SearchBar />
    <Fade bottom>
      <TagsContainer>
        <TagButton
          onClick={() => {
            history.push(`/shop/hledat/hat`);
          }}
        >
          Witcher
        </TagButton>
        <TagButton
          onClick={() => {
            history.push(`/shop/hledat/hat`);
          }}
        >
          Rick &amp; Morty
        </TagButton>
        <TagButton
          onClick={() => {
            history.push(`/shop/hledat/hat`);
          }}
        >
          Harry Potter
        </TagButton>
        <TagButton
          onClick={() => {
            history.push(`/shop/hledat/hat`);
          }}
        >
          Game of Thrones
        </TagButton>
        <TagButton
          onClick={() => {
            history.push(`/shop/hledat/hat`);
          }}
        >
          Lord of the Rings
        </TagButton>
        <TagButton
          onClick={() => {
            history.push(`/shop/hledat/hat`);
          }}
        >
          Game of Thrones
        </TagButton>
        <TagButton
          onClick={() => {
            history.push(`/shop/hledat/hat`);
          }}
        >
          Zaklínač
        </TagButton>
        <TagButton
          onClick={() => {
            history.push(`/shop/hledat/hat`);
          }}
        >
          Lord of the Rings
        </TagButton>

        <TagButton
          onClick={() => {
            history.push(`/shop/hledat/hat`);
          }}
        >
          Pulp Fiction
        </TagButton>
      </TagsContainer>
    </Fade>
  </SearchContainer>
);

export default withRouter(HpSearch);
