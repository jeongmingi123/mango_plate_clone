import { faker } from "@faker-js/faker";

function getPopularFood(foodType) {
  const url = `${this.baseUrl}/${foodType}/${foodType}18.jpg`;
  return url;
}

function getImageUrl(foodType, count) {
  const url = `${this.baseUrl}/${foodType}/${foodType}${count}.jpg`;
}

const db = {
  foods: [],
  pizzas: [],
  burgers: [],
  desserts: [],
  pastas: [],
  rices: [],
  dosas: [],
  popular_foods: [],
};

for (let i = 1; i < 8; i++) {
  db.foods.push({
    id: i,
    type: "pizza",
    storeName: faker.company.companyName(),
    menu: [
      faker.commerce.productName(),
      faker.commerce.productName(),
      faker.commerce.productName(),
    ],
    url: faker.internet.url(),
    address: faker.address.city(),
    branch: faker.address.cityName(),
    tel: faker.phone.phoneNumber("02-###-####"),
    rating: (Math.random() * 5).toPrecision(2),
    image: `https://foodish-api.herokuapp.com/images/pizza/pizza1.jpg`,
  });
  db.pizzas.push({
    id: i,
    type: "pizza",
    storeName: faker.company.companyName(),
    menu: [
      faker.commerce.productName(),
      faker.commerce.productName(),
      faker.commerce.productName(),
    ],
    url: faker.internet.url(),
    address: faker.address.city(),
    branch: faker.address.cityName(),
    tel: faker.phone.phoneNumber("02-###-####"),
    rating: (Math.random() * 5).toPrecision(2),
    image: `https://foodish-api.herokuapp.com/images/pizza/pizza${i}.jpg`,
    detailImage: [
      `https://foodish-api.herokuapp.com/images/pizza/pizza3.jpg`,
      `https://foodish-api.herokuapp.com/images/pizza/pizza4.jpg`,
      `https://foodish-api.herokuapp.com/images/pizza/pizza5.jpg`,
      `https://foodish-api.herokuapp.com/images/pizza/pizza6.jpg`,
      `https://foodish-api.herokuapp.com/images/pizza/pizza7.jpg`,
    ],
    reviews: [],
  });
  db.burgers.push({
    id: i,
    type: "burger",
    storeName: faker.company.companyName(),
    menu: [
      faker.commerce.productName(),
      faker.commerce.productName(),
      faker.commerce.productName(),
    ],
    url: faker.internet.url(),
    address: faker.address.city(),
    branch: faker.address.cityName(),
    tel: faker.phone.phoneNumber("02-###-####"),
    rating: (Math.random() * 5).toPrecision(2),
    image: `https://foodish-api.herokuapp.com/images/burger/burger${i}.jpg`,
    detailImage: [
      `https://foodish-api.herokuapp.com/images/burger/burger3.jpg`,
      `https://foodish-api.herokuapp.com/images/burger/burger4.jpg`,
      `https://foodish-api.herokuapp.com/images/burger/burger5.jpg`,
      `https://foodish-api.herokuapp.com/images/burger/burger6.jpg`,
      `https://foodish-api.herokuapp.com/images/burger/burger7.jpg`,
    ],
    reviews: [],
  });
  db.desserts.push({
    id: i,
    type: "dessert",
    storeName: faker.company.companyName(),
    menu: [
      faker.commerce.productName(),
      faker.commerce.productName(),
      faker.commerce.productName(),
    ],
    url: faker.internet.url(),
    address: faker.address.city(),
    branch: faker.address.cityName(),
    tel: faker.phone.phoneNumber("02-###-####"),
    rating: (Math.random() * 5).toPrecision(2),
    image: `https://foodish-api.herokuapp.com/images/dessert/dessert${i}.jpg`,
    detailImage: [
      `https://foodish-api.herokuapp.com/images/dessert/dessert3.jpg`,
      `https://foodish-api.herokuapp.com/images/dessert/dessert4.jpg`,
      `https://foodish-api.herokuapp.com/images/dessert/dessert5.jpg`,
      `https://foodish-api.herokuapp.com/images/dessert/dessert6.jpg`,
      `https://foodish-api.herokuapp.com/images/dessert/dessert7.jpg`,
    ],
    reviews: [],
  });
  db.pastas.push({
    id: i,
    type: "pasta",
    storeName: faker.company.companyName(),
    menu: [
      faker.commerce.productName(),
      faker.commerce.productName(),
      faker.commerce.productName(),
    ],
    url: faker.internet.url(),
    address: faker.address.city(),
    branch: faker.address.cityName(),
    tel: faker.phone.phoneNumber("02-###-####"),
    rating: (Math.random() * 5).toPrecision(2),
    image: `https://foodish-api.herokuapp.com/images/pasta/pasta${i}.jpg`,
    detailImage: [
      `https://foodish-api.herokuapp.com/images/pasta/pasta3.jpg`,
      `https://foodish-api.herokuapp.com/images/pasta/pasta4.jpg`,
      `https://foodish-api.herokuapp.com/images/pasta/pasta5.jpg`,
      `https://foodish-api.herokuapp.com/images/pasta/pasta6.jpg`,
      `https://foodish-api.herokuapp.com/images/pasta/pasta7.jpg`,
    ],
    reviews: [],
  });
  db.rices.push({
    id: i,
    type: "rice",
    storeName: faker.company.companyName(),
    menu: [
      faker.commerce.productName(),
      faker.commerce.productName(),
      faker.commerce.productName(),
    ],
    url: faker.internet.url(),
    address: faker.address.city(),
    branch: faker.address.cityName(),
    tel: faker.phone.phoneNumber("02-###-####"),
    rating: (Math.random() * 5).toPrecision(2),
    image: `https://foodish-api.herokuapp.com/images/rice/rice${i}.jpg`,
    detailImage: [
      `https://foodish-api.herokuapp.com/images/rice/rice3.jpg`,
      `https://foodish-api.herokuapp.com/images/rice/rice4.jpg`,
      `https://foodish-api.herokuapp.com/images/rice/rice5.jpg`,
      `https://foodish-api.herokuapp.com/images/rice/rice6.jpg`,
      `https://foodish-api.herokuapp.com/images/rice/rice7.jpg`,
    ],
    reviews: [],
  });

  db.dosas.push({
    id: i,
    type: "dosa",
    storeName: faker.company.companyName(),
    menu: [
      faker.commerce.productName(),
      faker.commerce.productName(),
      faker.commerce.productName(),
    ],
    url: faker.internet.url(),
    address: faker.address.city(),
    branch: faker.address.cityName(),
    tel: faker.phone.phoneNumber("02-###-####"),
    rating: (Math.random() * 5).toPrecision(2),
    image: `https://foodish-api.herokuapp.com/images/dosa/dosa${i}.jpg`,
    detailImage: [
      `https://foodish-api.herokuapp.com/images/dosa/dosa3.jpg`,
      `https://foodish-api.herokuapp.com/images/dosa/dosa4.jpg`,
      `https://foodish-api.herokuapp.com/images/dosa/dosa5.jpg`,
      `https://foodish-api.herokuapp.com/images/dosa/dosa6.jpg`,
      `https://foodish-api.herokuapp.com/images/dosa/dosa7.jpg`,
    ],
    reviews: [],
  });

  db.popular_foods.push({
    id: i,
    type: "pizza",
    storeName: faker.company.companyName(),
    menu: [
      faker.commerce.productName(),
      faker.commerce.productName(),
      faker.commerce.productName(),
    ],
    url: faker.internet.url(),
    address: faker.address.city(),
    branch: faker.address.cityName(),
    tel: faker.phone.phoneNumber("02-###-####"),
    rating: (Math.random() * 5).toPrecision(2),
    image: `https://foodish-api.herokuapp.com/images/pizza/pizza1.jpg`,
    detailImage: [
      `https://foodish-api.herokuapp.com/images/pizza/pizza3.jpg`,
      `https://foodish-api.herokuapp.com/images/pizza/pizza4.jpg`,
      `https://foodish-api.herokuapp.com/images/pizza/pizza5.jpg`,
      `https://foodish-api.herokuapp.com/images/pizza/pizza6.jpg`,
      `https://foodish-api.herokuapp.com/images/pizza/pizza7.jpg`,
    ],
    reviews: [],
  });
}
console.log(JSON.stringify(db));
