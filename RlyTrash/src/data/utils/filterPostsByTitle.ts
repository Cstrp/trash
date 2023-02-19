import { Post } from '../types/post';

export const filterPostsByTitle = (posts: Post[], query: string) => {
  if (query) {
    return posts.filter((post) => {
      if (post.title) {
        return post.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
      }
    });
  } else {
    return posts;
  }
};
