import React, { type ChangeEvent, type FormEvent, useEffect, useState } from 'react';
import Post from './data/interfaces/post';
import axios from 'axios';

const fetchPosts = async () => {
  return await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
};

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  setInterval(() => {
    fetchPosts().then(
      (response) => {
        setPosts(response.data);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      },
    );
  }, 5000);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading &&
        posts &&
        posts.map((post) => (
          <p key={post.id}>
            {post.id} {post.title}
          </p>
        ))}
    </div>
  );
};

const App: React.FC = () => {
  const [text, setText] = useState<{ value: string }>({ value: '' });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setText({ value: evt.target.value });
  };

  const submit = (evt: FormEvent) => {
    evt.preventDefault();
    console.log(text.value);
    setText({ value: '' });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form
        className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={(evt) => {
          submit(evt);
        }}
      >
        <input
          className={
            'bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2' +
            'px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
          }
          type="text"
          value={text.value}
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </form>
      <div className="max-w-2xl">
        <p className="text-center text-gray-500 text-3xl">&copy; Live Update: {text.value}</p>
      </div>
      <Posts />
    </div>
  );
};

export default App;
