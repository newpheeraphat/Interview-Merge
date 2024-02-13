import { mergeType } from './interfaces/IMergeUtil';

export const merge: mergeType = (collection_1, collection_2, collection_3) => {
  try {
    const result: number[] = [];
    let i: number = 0;
    let j: number = collection_2.length - 1;
    let k: number = 0;

    while (i < collection_1.length || j >= 0 || k < collection_3.length) {
      let arr1 = i < collection_1.length ? collection_1[i] : Infinity;
      let arr2 = j >= 0 ? collection_2[j] : Infinity;
      let arr3 = k < collection_3.length ? collection_3[k] : Infinity;

      if (arr1 <= arr2 && arr1 <= arr3) {
        result.push(arr1);
        i++;
      } else if (arr2 <= arr1 && arr2 <= arr3) {
        result.push(arr2);
        j--;
      } else if (arr3 <= arr1 && arr3 <= arr2) {
        result.push(arr3);
        k++;
      }
    }
    return result;
  } catch (error: any) {
    console.log(error);
  }
};
