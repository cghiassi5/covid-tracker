let component = ReasonReact.statelessComponent("Hello");
[@react.component]
let make = (~data) => {
  <div> {ReasonReact.string(data)} </div>
};

