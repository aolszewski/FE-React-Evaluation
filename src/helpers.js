export function chunkArray(arr, chunkSize) {
  const modifiedArray = arr.map((element, index) => {
    const modifiedElement = element;
    modifiedElement.index = index + 1;
    return modifiedElement;
  });
  let chunkedArray = [];

  let index = 0;
  while (index < arr.length) {
    chunkedArray.push(modifiedArray.slice(index, chunkSize + index));
    index += chunkSize;
  }

  return chunkedArray;
}
