import { collectionType } from './interfaces/IMergeUtil';
import { merge } from './merge';

const collection_1: collectionType = [1, 2, 3];
const collection_2: collectionType = [6, 5, 4];
const collection_3: collectionType = [7, 8, 9];

console.log(merge(collection_1, collection_2, collection_3));
