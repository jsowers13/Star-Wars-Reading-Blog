const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl: "https://swapi.dev/api/",
      characters: [],
      planets: [],
      starships: [],
      favorites: [],
    },

    actions: {
      getCharacters: () => {
        const people = getStore().apiUrl + "people/";
        fetch(people)
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ characters: data.results });
          })
          .then(() => console.log(getStore().characters));
      },
      getPlanets: () => {
        const planets = getStore().apiUrl + "planets/";
        fetch(planets)
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ planets: data.results });
          })
          .then(() => console.log(getStore().planets));
      },
      getStarships: () => {
        const starships = getStore().apiUrl + "starships/";
        fetch(starships)
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ starships: data.results });
          })
          .then(() => console.log(getStore().starships));
      },
      getFavorites: (item) => {
        console.log(item);
        let myFavorites = getStore().favorites;
        let selected = myFavorites.find((element) => element === item);
        if (selected) {
          myFavorites = myFavorites.filter((element) => item !== element);
          setStore({ favorites: myFavorites });
        } else {
          myFavorites = [...myFavorites, item];
          setStore({ favorites: myFavorites });
        }
      },
    },
  };
};

export default getState;
