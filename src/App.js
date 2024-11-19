import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [articles, setArticles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    setArticles([...articles, title]);
    setTitle('');
  };


  const handleDelete = (index) => {
    const newArticles = articles.filter((_, i) => i !== index);
    setArticles(newArticles);
  };

  return (
    <div>
      <h1>Blog Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titolo dell'articolo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Aggiungi Articolo</button>
      </form>
      <h2>Articoli Inseriti:</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            {article}
            <button onClick={() => handleDelete(index)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;





