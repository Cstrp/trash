import axios from 'axios';
import { Post } from '../types';

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const data = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

    return data.data;
  } catch (err) {
    console.log(err);

    return [];
  }
};
