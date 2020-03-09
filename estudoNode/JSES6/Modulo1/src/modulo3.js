//Programação assincrona
const minhaPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 2000);
  });

//Antiga
minhaPromise()
  .then(response => {
    console.log(responde);
  })
  .catch(err => {});

//Nova Forma
async function executaPromise() {
  const response = await minhaPromise();
}

executaPromise();
