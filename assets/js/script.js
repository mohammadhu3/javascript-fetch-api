fetch("./assets/js/data.json")
  .then((reponse) => reponse.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
