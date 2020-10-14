// type sampleDay = {
//   date: string,
//   states: int,
//   positive: int,
//   negative: int,
//   pending: int,
//   hospitalizedCurrently: int,
//   hospitalziedCummulative: int,
//   inIcuCurrently: int,
//   onVentilatorCurrently: int,
//   onVentilatorCummulative: int,
//   recovered: int,
//   dateChecked: string,
//   death: int,
//   hospitalized: int,
//   totalTestResults: int,
//   lastModified: string,
//   total: int,
//   posNeg: int,
//   deathIncrease: int,
//   hospitalizedIncrease: int,
//   negativeIncrease: int,
//   positiveIncrease: int,
//   totalTestResultsIncrease: int,
//   hash: string
// };

// module Decode = {
//   let item = json =>
//     Json.Decode.{
//       date: json |> field("date", string),
//       states: json |> field("states", int),
//       positive: json |> field("positive", int),
//       negative: json |> field("negative", int),
//       pending: json |> field("pending", int),
//       hospitalizedCurrently: json |> field("hospitalizedCurrently", int),
//       hospitalizedCummulative: json |> field("hospitalizedCummulative", int),
//       inIcuCurrently: json |> field("inIcuCurrently", int),
//       onVentilatorCurrently: json |> field("onVentilatorCurrently", int),
//       onVentilatorCummulative: json |> field("onVentilatorCummulative", int),
//       recovered: json |> field("recovered", int),
//       dateChecked: json |> field("dateChecked", string),
//       death: json |> field("death", int),
//       hospitalized: json |> field("hospitalized", int),
//       totalTestResults: json |> field("totalTestResults", int),
//       lastModified: json |> field("lastModified", string),
//       total: json |> field("total", int),
//       posNeg: json |> field("posNeg", int),
//       deathIncrease: json |> field("deathIncrease", int),
//       hospitalizedIncrease: json |> field("hospitalizedIncrease", int),
//       negativeIncrease: json |> field("negativeIncrease", int),
//       positiveIncrease: json |> field("positiveIncrease", int),
//       totalTestResultsIncrease: json |> field("totalTestResultsIncrease", int),
//       hash: json |> field("hash", string),
//   };
//   let all =
//     Json.Decode.array(item)
// };


