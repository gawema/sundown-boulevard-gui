import axios from "axios";

const meals_api = "https://www.themealdb.com/api/json/v1/1"
const drinks_api = "https://api.punkapi.com/v2/beers"
const orders_api = "http://localhost:3001/orders"


const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const postData = async (url, body) => {
  try {
    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const patchData = async (url, body) => {
  try {
    const response = await axios.patch(url, body);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getOrderByEmail = (email) => {
  return fetchData(`${orders_api}?email=${email}`)
}

const addOrUpdateOrder = async (order) => {
  if (!order.id) {
    const newOrder = {...order, id: Date.now()}
    return postData(orders_api, newOrder)
  }
else {
    return patchData(`${orders_api}/${order.id}`, order)
  }
}

const getRandomMeal = async () => {
  const data = await fetchData(`${meals_api}/random.php`)
  return (data.meals[0])

}

const getMealbyId = async (id) => {
  const data = await fetchData(`${meals_api}/lookup.php?i=${id}`)
  return (data.meals[0])
}

const getAllDrinks = async () => {
  return await fetchData(drinks_api)
}


export {
  fetchData,
  postData,
  patchData,
  getOrderByEmail,
  addOrUpdateOrder,
  getRandomMeal,
  getMealbyId,
  getAllDrinks,

};
