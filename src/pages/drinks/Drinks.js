import './Drinks.css';
import { motion } from 'framer-motion';

import React, { useEffect, useState } from 'react';

import OrderStatusBox from '../../components/OrderStatusBox';
import { getAllDrinks } from '../../utils/httpClient';
import { useHistory } from 'react-router-dom';

const Drinks = () => {
  const history = useHistory();

  const [order, setOrder] = useState(JSON.parse(localStorage.getItem('order')));
  const [allDrinks, setAllDrinks] = useState([]);

  useEffect(() => {
    if (!order) {
      history.push({ pathname: '/' });
    }
    const getDrinks = async () => {
      setAllDrinks(await getAllDrinks());
    };
    getDrinks();
  }, []);

  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(order));
  }, [order]);

  const updateOrder = (id) => {
    let newSelectDrinks = [...order.drinks];
    const index = newSelectDrinks.indexOf(id);
    if (index === -1) {
      newSelectDrinks.push(id);
    } else {
      newSelectDrinks.splice(index, 1);
    }
    setOrder({ ...order, drinks: [...newSelectDrinks] });
  };

  return (
    <>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -300, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="drinks box"
      >
        {allDrinks.map((drink) => {
          return (
            <div
              key={drink.id}
              className="drink-card box"
              style={{
                borderColor: `${
                  order?.drinks?.indexOf(drink.id) !== -1 && order?.drinks
                    ? '#BA2329'
                    : 'white'
                }`,
              }}
              onClick={() => updateOrder(drink.id)}
            >
              <div
                className="backdrop"
                style={{
                  backgroundImage: `url(${drink.image_url})`,
                }}
              ></div>
              <h4>{drink.name}</h4>
            </div>
          );
        })}
      </motion.div>
      <OrderStatusBox
        title="Choose your drinks"
        command="NEXT"
        nextStep="place-order"
        style={{
          pointerEvents: `${order?.drinks?.length < 1 ? 'none' : 'auto'}`,
          backgroundColor: `${
            order?.drinks?.length < 1 ? '#ba232987' : '#ba2329'
          }`,
        }}
      />
    </>
  );
};

export default Drinks;
