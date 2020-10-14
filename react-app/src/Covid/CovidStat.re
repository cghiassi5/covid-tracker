open DataFetch;
open Decoder;

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
        |> then_(data => data |> covidArray => setState(_previousState => LoadedDogs(covidArray))|> resolve)
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
        <div key= (dog.hash) > {ReasonReact.string(dog.hash)} </div>
         })
       ->React.array
     }}
  </div>;
};
