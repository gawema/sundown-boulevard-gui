import './Meals.css';
import { motion } from 'framer-motion';

import React, { useEffect, useState } from 'react';
import { getMealbyId, getRandomMeal } from '../../utils/httpClient';

import Button from '../../components/Button';
import OrderStatusBox from '../../components/OrderStatusBox';
import { useHistory } from 'react-router-dom';

const Meals = () => {
  const history = useHistory();

  const [order, setOrder] = useState(JSON.parse(localStorage.getItem('order')));
  const [meal, setMeal] = useState({});

  useEffect(() => {
    if (!order) {
      history.push({ pathname: '/' });
    }
    const getMeal = async () => {
      if (order.meal_id.length > 1) {
        setMeal(await getMealbyId(order.meal_id));
      } else {
        const meal = await getRandomMeal();
        setMeal(meal);
        setOrder({ ...order, meal_id: meal['idMeal'] });
      }
    };
    getMeal();
  }, []);

  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(order));
  }, [order]);

  return (
    <>
      {meal?.strMeal && (
        <>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="meal"
          >
            <div className="box no-bottom-border">
              <img src={meal.strMealThumb} alt="Meals" />
            </div>
            <div className="meal-description box">
              <h4>{meal.strMeal}</h4>
              <p>{meal.strInstructions}</p>
            </div>
            <Button
              command="GENERATE NEW"
              onClick={async () => {
                const meal = await getRandomMeal();
                setMeal(meal);
                setOrder({ ...order, meal_id: meal['idMeal'] });
              }}
              style={{
                margin: '20px 0 0 auto',
              }}
            />
          </motion.div>
          <OrderStatusBox
            title="choose your meal"
            command="NEXT"
            nextStep="select-drinks"
          />
        </>
      )}
    </>
  );
};

export default Meals;
