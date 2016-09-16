
(() => {
  /* *
   * Find the median of two sorted arrays
   *
   * @param number[] arr1
   * @param number[] arr2
   * @return number[]
   * */
  function getMedianIndex(arr) {
    if (arr.length % 2 > 0) return (arr.length - 1) / 2;
    return Math.floor((arr.length - 1) / 2);
  }

  function getMedian(arr1, arr2) {
    let sub1;
    let sub2;

    const m1loc = getMedianIndex(arr1);
    const m2loc = getMedianIndex(arr2);

    const m1 = arr1[m1loc];
    const m2 = arr2[m2loc];

    if (m1 > m2) {
      sub1 = arr1.slice(0, m1loc + 1);
      sub2 = arr2.slice(m2loc);
    } else if (m2 > m1) {
      sub1 = arr1.slice(m1loc);
      sub2 = arr2.slice(0, m2loc + 1);
    } else if (m1 === m2) {
      return m1;
    }
  }
})();
