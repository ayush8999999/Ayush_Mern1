import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogById } from '../api';

const ShowPage = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      const { data } = await getBlogById(id);
      setBlog(data);
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h1>{blog.title}</h1>
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className="img-fluid rounded" // img-fluid ensures image responsiveness
        style={{ maxHeight: '500px', objectFit: 'cover' }} // style for max height and object fit
      />
      <p>{blog.content}</p>
      <Link to={`/blogs/${id}/edit`} className="btn btn-primary">Edit Card</Link>
    </div>
  );
};

export default ShowPage;
