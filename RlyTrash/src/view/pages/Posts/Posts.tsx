import React, { ChangeEvent, useEffect, useState } from 'react';
import { DetailPost } from '../../components/DetailPost';
import { Card } from '../../components';
import { Post } from '../../../data/types';
import { fetchPosts, filterPostsByTitle } from '../../../data/utils';

export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const searchHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const query = evt.target.value;

    if (query === '') {
      fetchPosts().then((data) => setPosts(data));

      return;
    }

    const results = filterPostsByTitle(posts, query);

    setPosts(results);
  };

  const handlePostSelect = (id: number) => {
    const post = posts.find((p) => p.id === id);

    if (post) setSelectedPost(post);
  };

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <form action="" onSubmit={(event) => event.preventDefault()}>
        <input
          type="search"
          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline "
          placeholder="search"
          onChange={searchHandler}
        />
      </form>

      {selectedPost ? (
        <DetailPost post={selectedPost} onClose={() => setSelectedPost(null)} />
      ) : (
        <div className="flex flex-col text-justify gap-2 ">
          {posts.map((post) => (
            <Card key={post.id} post={post} onSelect={handlePostSelect} />
          ))}
        </div>
      )}
    </div>
  );
};
