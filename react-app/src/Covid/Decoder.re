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