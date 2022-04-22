const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl: "https://swapi.dev/api/",
      characters: [],
      planets: [],
      starships: [],
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
    },
  };
};

export default getState;
