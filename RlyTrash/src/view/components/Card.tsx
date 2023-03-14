import { Post } from '../../data/types';
import { capitalizeFirstLetter } from '../../data/utils';
import React from 'react';

type CardProps = {
  post: Post;
  onSelect: (id: number) => void;
};

export const Card: React.FC<CardProps> = ({ post, onSelect }) => {
  const handleSelect = () => {
    if (post.id) onSelect(post.id);
  };

  return (
    <div
      className="flex flex-col gap-5 p-5 border-2 transition transition-all ease-in-out delay-500 hover:shadow-2xl cursor-pointer"
      onClick={handleSelect}
    >
      <span className="text-stone-700">{capitalizeFirstLetter(post.title)}</span>
      <p className="text-2xl text-justify">{capitalizeFirstLetter(post.body)}</p>
    </div>
  );
};
