let obj = [];
document.getElementById("btn").addEventListener("click", () => {
  console.log("click");
  console.log(axios);
  //get houses
  //house price

  var options = {
    method: "GET",
    url: "https://us-real-estate.p.rapidapi.com/v2/for-sale",
    params: {
      offset: "500",
      limit: "100",
      state_code: "CA",
      city: "sacramento",
      sort: "newest",
    },
    headers: {
      "x-rapidapi-host": "us-real-estate.p.rapidapi.com",
      "x-rapidapi-key": "e048275a83msh672b1ca63b7da28p156633jsn234a9cbad119",
    },
  };

  axios
    .request(options)

    .then(function (response) {
      const data = response;
      console.log(data);
      response.data.data.home_search.results.map(
        ({ location, list_price, list_date }, i) => {
          let local = {};
          for (let i in location.address) {
            local[i == "line" ? "address" : i] = location.address[i];
          }
          obj.push({
            ...local,
            status: "for sale",
            price: list_price,
            list_date,
          });
        }
      );
      console.log(data);
      console.log(obj);
    })
    .catch(function (error) {
      console.error(error);
    });
});
