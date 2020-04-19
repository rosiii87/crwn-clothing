import React from 'react';
import { withRouter } from 'react-router-dom';

import { LatestContainer } from './latest.styles';
// import { firestore } from '../../firebase/firebase.utils';

import Fade from 'react-reveal/Fade';

const HpLatest = ({ history }) => {
  //   const [items, setItems] = useState([]);

  //   useEffect(() => {
  //     async function fetchItems() {
  //       const postStock = firestore.collection('stock');
  //       const postQuery = postStock.orderBy('id', 'desc').limit(5);

  //       const querySnapshot = await postQuery.get();
  //       console.log(querySnapshot);
  //     }
  //     const itemsObj = fetchItems();
  //     console.log(itemsObj);
  //   }, []);

  //   console.log(items);

  return (
    <LatestContainer>
      <Fade bottom>
        <h1>Novinky</h1>
      </Fade>
      <Fade bottom></Fade>
    </LatestContainer>
  );
};

export default withRouter(HpLatest);
