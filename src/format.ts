/**
 * {
  0: [0, 20],
  1: [20, 100],
  2: [100, 500],
  4: [600, 2000],
} add 1

{
  0: [0, 20],
  1: [20, 100],
  3: [100, 500],
  5: [600, 2000],
}
 * 
 *  
 * */

import * as _ from "lodash";
// import * as React from 'react'

const updateAdd = function (index: number, range = {}) {
  let r = {};
  Object.entries(range)
    .map((a, i) => {
      let [k, v] = a;
      if (Number(k) > index) {
        return [Number(k) + 1, v];
      }
      return a;
    })
    .forEach((pair) => {
      let [k, v] = pair;
      r[k] = v;
    });
  return r;
};

const testUpdateAdd = function () {
  let i = 2;
  let r = {
    0: [0, 20],
    1: [20, 100],
    2: [100, 500],
    4: [600, 2000]
  };
  console.log("debug testUpdateAdd", updateAdd(i, r));
  return updateAdd(i, r);
};

const sort = function () {};

export { testUpdateAdd, testUpdateAdd };
