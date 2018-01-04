// 02 Pokemon_API
import express from 'express';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';
// import Promise from 'bluebird';

const app = express(); // run express

const __DEV__ = true;

const baseURL = 'https://pokeapi.co/api/v2';
const pokemonsFields = ['id', 'name', 'weight'];

async function getPokemons(url, i = 0) {
  const response = await fetch(url);
  const page = await response.json();
  // получаем всех покемонов на странице через API page.results
  const pokemons = page.results;
  // оптимизируем время загрузки с сервера
  if (__DEV__ && i >= 1) {
    return pokemons;
  }
// если есть переход на след страницу => вызываем рекурсивную функцию
  if (page.next) {
    // дожидаемся ответа функции
    const pokemons2 = await getPokemons(page.next, i + 1);
    return [
      ...pokemons,
      ...pokemons2,
    ];
  }

  return pokemons;
}

async function getPokemon(url) {
  const response = await fetch(url);
  const pokemon = await response.json();
  return pokemon;
}

app.get('/', async (req, res) => {
  try {
    // список всех pokemon
    const pokemonsURL = `${baseURL}/pokemon`;
    // ответ от API, получая данные всех pokemons
    const pokemonsInfo = await getPokemons(pokemonsURL);
    // получаем масств промисов
    const pokemonsPromises = pokemonsInfo.map((info) => {
      return getPokemon(info.url);
    }
    );
    // дожидаемся ответа всех промисов.
    const pokemonsFull = await Promise.all(pokemonsPromises);
    console.log(pokemonsFull);

    // отбираем(фильтруем) только те данные которые нам нужны
    // отбор через lodash метод _.pick(где искать, какие поля нужны)
    const pokemons = pokemonsFull.map((pokemon) => {
      return _.pick(pokemon, pokemonsFields);
    });
    // сортировка pokemons по убыванию веса
    const sortPokemons = _.sortBy(pokemons, pokemon => -pokemon.weight);

    return res.json(sortPokemons);
  } catch (err) {
    console.log(err);
    return res.json({ err });
  }
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

