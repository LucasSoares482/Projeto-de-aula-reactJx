import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from './PostServices';

const ListaPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Lista de Posts</h2>
      <Link to="/novo-post" className="btn btn-primary mb-3">Novo Post</Link>
      <ul className="list-group">
        {posts.map(post => (
          <li key={post.id} className="list-group-item">
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <Link to={`/editar-post/${post.id}`} className="btn btn-warning">Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaPosts;
