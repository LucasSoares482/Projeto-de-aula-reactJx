import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createPost, getPost, updatePost } from './PostServices'; // Importe as funções para posts

function FormPost() {
  const [formData, setFormData] = useState({ title: '', body: '' });
  const navigate = useNavigate();
  const { id } = useParams(); // Captura o ID do post da URL

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const post = await getPost(id);
          setFormData(post);
        } catch (error) {
          console.error('Erro ao carregar post:', error);
        }
      };
      fetchPost();
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submeter = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updatePost(id, formData); // Atualiza o post
      } else {
        await createPost(formData); // Cria um novo post
      }
      navigate('/'); // Volta para a lista de posts
    } catch (error) {
      console.error('Erro ao salvar post:', error);
    }
  };

  return (
    <div>
      <h2>{id ? 'Editar Post' : 'Criar Post'}</h2>
      <form onSubmit={submeter}>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Conteúdo</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          {id ? 'Atualizar' : 'Salvar'}
        </button>
      </form>
    </div>
  );
}

export default FormPost;
