open BsRecharts;

let component = ReasonReact.statelessComponent("Chart");
[@react.component]
  let make = (~data) => {
        <LineChart width={730} height={250} data>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hash"/>
          <YAxis />
          <Line dataKey="date" stroke="#8884d8" />
        </LineChart>
};