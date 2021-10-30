var freewayGame = function (d, s, cars) {
  return cars
    .map((x) => [(x[0] / 60) * x[1], (s - x[1]) * (d / s)])
    .map((x) => {
      if (x[0] < 0) {
        return x[0] + x[1] > 0 ? 1 : 0;
      } else {
        return x[0] + x[1] < 0 ? -1 : 0;
      }
    })
    .reduce((c, v) => c + v, 0);
};
