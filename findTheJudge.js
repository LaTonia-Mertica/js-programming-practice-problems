/*
Input: n = 3, trust = [[1,3],[2,3]]
Output: 3 // true

Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1 // false

note: still incomplete / doesn't pass leetcode submit
*/
const trust = [
  [1, 3],
  [2, 3],
]; // output 3

const arrOfTrust = [
  [3, 1],
  [3, 2],
  [2, 3],
]; // output -1

const trustArr = [
  [1, 2],
  [1, 3],
  [2, 3],
]; // output 3

const trustArray = [
  [1, 2],
  [2, 3],
]; // output -1

const arrayTrust = [
  [1, 2],
  [1, 3],
  [2, 3],
]; // output 3

var findJudge = function (n, trust) {
  const trusters = [];
  const fullPopulation = [];

  for (let i = 0; i < trust.length; i++) {
    if (trust[i][0]) {
      trusters.push(trust[i][0]);
    }
  }

  for (let j = 1; j <= n; j++) {
    fullPopulation.push(j);
  }

  const PeopleWhoTrustNoOne = fullPopulation.filter(
    (p) => !trusters.includes(p)
  );

  if (PeopleWhoTrustNoOne.length === 1) {
    const maybeJudge = PeopleWhoTrustNoOne[0];

    const PeopleWhoTrustJudge = trust
      .filter(([truster, trusted]) => trusted === maybeJudge)
      .map(([truster, trusted]) => truster)
      .sort();

    const fullPopMinusMaybeJudge = fullPopulation.filter(
      (p) => p !== PeopleWhoTrustNoOne[0]
    );

    if (fullPopMinusMaybeJudge.length !== PeopleWhoTrustJudge.length) {
      return -1;
    }

    for (let i = 0; i < fullPopMinusMaybeJudge.length; i++) {
      const pop = fullPopMinusMaybeJudge[i];
      const trustsJ = PeopleWhoTrustJudge[i];

      if (pop === trustsJ) {
        if (i === fullPopMinusMaybeJudge.length - 1) {
          return maybeJudge;
        }
      } else {
        return -1;
      }
    }
  }
};
console.log(findJudge(3, trust)); // 3
console.log(findJudge(3, arrOfTrust)); // -1
console.log(findJudge(3, trustArr)); // 3
console.log(findJudge(3, trustArray)); // -1
console.log(findJudge(3, arrayTrust)); // 3
