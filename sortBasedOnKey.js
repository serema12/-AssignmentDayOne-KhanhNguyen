function sortBasedOnKey(array, key) {
  return array.sort((a, b) => b[key] - a[key]);
}
const library = [{ libraryId: 1254 }, { libraryId: 100 }];
const keySort = "libraryId";

const sortArray = sortBasedOnKey(library, keySort);
console.log(...sortArray);
