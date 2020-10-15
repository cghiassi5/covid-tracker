open DataFetch;
open Decoder;

type state =
  | Loading
  | ErrorFetching
  | Loaded(array(sampleDay));

//used to create a variable of same type as fetched data for testing
let blah = [|{
  date: 1234,
  hospitalizedCurrently: Some(1234),
  hospitalizedCumulative: Some(1234),
  hash: "string"
}|];
//sample array for testing
type payload = {
  name: string,
  age: int
};

let student1 = {
  name: "John",
  age: 30,
};

[@react.component]
let make = () => {
  let (state, setState) = React.useState(() => Loading);

  React.useEffect0(() => {
    Js.Promise.(
      fetchCovidData()
        |> then_(data => data |> covidArray => setState(_previousState => Loaded(covidArray))|> resolve)
        |> catch(_err => {
           setState(_previousState => ErrorFetching);
           Js.Promise.resolve();
         })
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
     | ErrorFetching => React.string("An error occurred!")
     | Loading => React.string("Loading...")
     | Loaded(stats) =>
     Js.log(stats);
        <Hello data="stats" />
        // <Chart data={[|student1|]} />
     }}
  </div>;
};
