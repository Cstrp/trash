import axios from 'axios';
import React, { useState } from 'react';

type Hit = {
  created_at: string;
  title: string;
  url: string;
  author: string;
  _tags: string[];
};

interface Hits {
  hits: Hit[];
}

const search = (str: string) => {
  const url = `https://hn.algolia.com/api/v1/search?query=${str}`;

  return axios.get<Hits>(url);
};

// const parse = (str: string) => {
//   const hits = str.split('\n');
//
//   return hits.map((hit) => ({
//     created_at: new Date(hit).toISOString(),
//   }));
// };

const articles = (hits: Hit[]) => {
  // return hits.map((hit) => ({
  // created_at: new Date(hit.created_at).toISOString()

  const parsedDate = (str: string) => {
    const date = new Date(str);

    return date.toLocaleString('en-EN', { year: 'numeric', month: '2-digit', day: '2-digit' });
  };

  return (
    <div className="flex flex-row flex-wrap">
      {hits.map((article, _) => (
        <div key={_} className="w-1/3 flex flex-col items-center gap-5 border-2 rounded-2xl border-cyan-400 p-5">
          <div className="flex flex-col flex-wrap p-3 items-center">
            <p className="items-start">Title: {article.title ? article.title : 'Title was not found'}</p>
            {article._tags.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </div>
          <div className="flex flex-row items-center justify-center pt-5">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-full">
                View Article
              </button>
            </a>
          </div>
          <p>{parsedDate(article.created_at)}</p>
        </div>
      ))}
    </div>
  );
};

const SearchCom: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [hits, setHits] = useState<Hit[]>([]);

  const onSearchS = () => {
    search(query)
      .then((response) => {
        setHits(response.data.hits);
        setQuery('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-5 items-center justify-center p-3">
        <form action="" onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
        <button
          onClick={onSearchS}
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>

      {articles(hits)}
    </div>
  );
};

export const Home = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center">Home</h1>
      <SearchCom />
    </div>
  );
};
