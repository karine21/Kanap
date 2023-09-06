console.log("Kanap");
//const url = "http://localhost:3000/api/products";
const blockcontainer = document.getElementById("items"); //mon id ligne70

const getObjets = () => {
  //ma requête appel du serveur
  fetch("http://localhost:3000/api/products")
    .then(function (res) {
      return res.json();
    })
    //gère les erreurs
    /*try {
      // code...
    } catch (err) {
      // Gestion des erreurs connexion impossible
    }*/
    .then(function (data) {
      console.log(data);
      for (product in data) {
        container.innerHTML += `<a href="./product.html?id=42"> 
            <article >
              <img src = "${data[product].imageUrl}" alt = "Lorem ipsum dolor sit amet, Kanap name1" >               
              <h3 class = "productName" >${data[product].name}</h3>
              <p class = "productDescription" >${data[product].description}</p> 
            </article > 
          </a>`;
      }
    });
};
/*getObjets();
const request = new Request("https://example.com", {
  method: "POST",
  body: '{"foo": "bar"}',
});

const URL = request.url;
const method = request.method;
const credentials = request.credentials;
const bodyUsed = request.bodyUsed;
fetch(request)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Something went wrong on api server!");
    }
  })
  .then((response) => {
    console.debug(response);
    // ...
  })
  .catch((error) => {
    console.error(error);
  });*/
