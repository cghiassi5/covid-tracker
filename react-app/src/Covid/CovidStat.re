let myUrl = "https://api.covidtracking.com/v1/us/daily.json"


type sampleDay = {
  date: int,
  hospitalizedCurrently: option(int),
  hospitalizedCumulative: option(int),
  hash: string
};

module Decode = {
  let item = json =>
    Json.Decode.{
      date: json |> field("date", int),
      hospitalizedCurrently: json |> field("hospitalizedCurrently", optional(int)),
      hospitalizedCumulative: json |> field("hospitalizedCumulative", optional(int)),
      hash: json |> field("hash", string)
  };
    let all =
    Json.Decode.array(item)


};

let fetchJson = (url, decoder) =>
  Js.Promise.(
    Fetch.fetch(url)
    |> then_(Fetch.Response.json)
    |> then_(obj => obj |> decoder |> resolve)
  );

let fetchCovidData = () =>
  fetchJson(myUrl, Decode.all)

type state =
  | LoadingDogs
  | ErrorFetchingDogs
  | LoadedDogs(array(sampleDay));

[@react.component]
let make = () => {
  let (state, setState) = React.useState(() => LoadingDogs);

  React.useEffect0(() => {
    Js.Promise.(
      fetchCovidData()
        |> then_(data => data |> Js.log|> resolve)
      |> ignore
    );
    None;
  });

  <div
    style={ReactDOMRe.Style.make(
      ~height="120px",
      ~display="flex",
      ~alignItems="center",
      ~justifyContent="center",
      (),
    )}>
    {switch (state) {
     | ErrorFetchingDogs => React.string("An error occurred!")
     | LoadingDogs => React.string("Loading...")
     | LoadedDogs(dogs) =>
     Js.log(dogs)
        dogs
       ->Belt.Array.map((dog) => {
        <div> {ReasonReact.string(dog.hash)} </div>
         })
       ->React.array
     }}
  </div>;
};
