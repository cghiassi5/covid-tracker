open Decoder;

let myUrl = "https://api.covidtracking.com/v1/us/daily.json"

let fetchJson = (url, decoder) =>
  Js.Promise.(
    Fetch.fetch(url)
    |> then_(Fetch.Response.json)
    |> then_(obj => obj |> decoder |> resolve)
  );

let fetchCovidData = () =>
  fetchJson(myUrl, Decode.all);
