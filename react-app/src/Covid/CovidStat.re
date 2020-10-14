open DataFetch;
open Decoder;
open BsRecharts;


type state =
  | Loading
  | ErrorFetching
  | Loaded(array(sampleDay));

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
      <ResponsiveContainer height=(Px(200.)) width=(Px(300.))>
      <BarChart
        barCategoryGap=(Px(1.))
        margin={"top": 0, "right": 0, "bottom": 0, "left": 0}
        data={stats}>
        <Bar name="bar" dataKey="date" fill="#ff7f02" stackId="a" />
        <Tooltip />
        <Legend align=`left iconType=`circle />
      </BarChart>
    </ResponsiveContainer>
     }}
  </div>;
};
