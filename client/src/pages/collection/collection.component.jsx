import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import slugify from 'slugify';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

// import HpCarousel from '../../components/carousel/hp-carousel.component';

import {
  CategoryBannerContainer,
  WallpaperWall,
  WallBannerContainer,
  WallTitle,
  WallItem,
  WallItemContainer,
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
  SearchInput,
  InputText,
  SearchLabel,
} from './collection.styles';

const CollectionPage = ({ collection, history }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // const sortPriceAsc = () => {
  //   const sorted = [...searchResult].sort((a, b) => {
  //     return a.price - b.price;
  //   });
  //   setSearchResult(sorted);
  // };

  // const sortPriceDsc = () => {
  //   const sorted = [...searchResult].sort((a, b) => {
  //     return b.price - a.price;
  //   });
  //   setSearchResult(sorted);
  // };

  const { title, routeName, items } = collection;

  useEffect(() => {
    console.log('triggered');
    const results = items.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResult(results);
  }, [searchTerm, items]);

  return (
    <>
      <Helmet>
        <title>{title} - collection</title>
        <meta name="description" content={title} />
      </Helmet>
      <CategoryBannerContainer>
        <WallpaperWall>
          <WallTitle>{title}</WallTitle>
          <WallBannerContainer>
            {items
              .filter((item, idx) => idx < 5)
              .map((item) => (
                <WallItemContainer>
                  <span>{item.name}</span>
                  <WallItem
                    src={item.imageUrl}
                    onClick={() =>
                      history.push(
                        `/shop/${item.collection.toLowerCase()}/${slugify(
                          item.name
                        ).toLowerCase()}/${item.id}`
                      )
                    }
                  ></WallItem>
                </WallItemContainer>
              ))}
            {/* <HpCarousel></HpCarousel> */}
          </WallBannerContainer>
        </WallpaperWall>
      </CategoryBannerContainer>
      {/* <CollectionTitle>{title}</CollectionTitle> */}
      {/* <button onClick={sortPriceAsc}>Od nejlevnějšího</button>
      <button onClick={sortPriceDsc}>Od nejdražšího</button> */}
      <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <SearchLabel>
          <SearchInput
            style={{ marginBottom: '20px' }}
            placeholder=" "
            value={searchTerm}
            type="text"
            onChange={handleChange}
          ></SearchInput>
          <InputText>Hledat:</InputText>
        </SearchLabel>
        <CollectionItemsContainer>
          {searchResult[0] ? (
            searchResult.map((item) => (
              <CollectionItem key={item.id} item={item} routeName={routeName} />
            ))
          ) : (
            <p>Žádný název produktu nebosahuje "{searchTerm}"</p>
          )}
        </CollectionItemsContainer>
        <br />
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          tenetur sequi dolore nesciunt harum sint inventore, similique soluta
          quidem, nostrum cum aperiam eligendi ullam iusto illo corporis
          temporibus numquam atque! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. <br />
          <br />
          Totam, deleniti? Nostrum ab pariatur impedit hic, repellendus
          perspiciatis soluta deserunt exercitationem itaque labore dignissimos
          recusandae temporibus voluptatibus non doloremque accusamus nisi.
        </span>
      </CollectionPageContainer>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
