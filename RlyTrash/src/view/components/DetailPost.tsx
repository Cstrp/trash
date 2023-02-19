import React from 'react';
import { Post } from '../../data/types';

type Props = {
  post: Post;
  onClose: () => void;
};
export const DetailPost: React.FC<Props> = ({ post, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>

      <div className="z-50 w-full max-w-md p-5 relative mx-auto my-auto rounded-md shadow-md bg-white">
        <button className="absolute top-0 right-0 m-4 font-bold text-2xl" onClick={onClose}>
          X
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>

        <p className="text-gray-700 text-base mb-6">{post.body}</p>

        <p className="text-sm text-gray-500">
          User ID: {post.userId}, Post ID: {post.id}
        </p>
      </div>
    </div>
  );
};
