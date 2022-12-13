import "./View/styles/common.scss";
import _ from "lodash";

const arr1 = [1, 2, 3, 4, 5];

const arr2 = [6, 7, 8, 9];

_.defer(function (stamp) {
  console.log(_.now() - stamp);
}, _.now());

console.log(
  _.concat(arr2, arr1),
  _.sortedIndex(arr2, 1),
  _.chunk(arr1),
  _.each(arr1, (i) => console.log(i))
);
