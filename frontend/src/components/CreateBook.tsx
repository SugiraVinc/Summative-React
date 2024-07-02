import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from './Spinners';
import '../BookForm.css';



const BookForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false)


  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      const data = {
        image,
        title,
        description
      }
      fetch('/api/books/create', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success('created successfully')
        navigate('/book')
      })
      .catch(error => console.log(error))
    } catch (error) {
       console.log(error)
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className="book-form-container" style={{marginTop: '12px'}}>
      <h2 style={{marginLeft: '110px', marginBottom: '12px'}}>Create New Book</h2>
      <form onSubmit={handleSubmit} className="book-form">
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            placeholder='image'
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder='title'
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        {isLoading && <Spinner/>}
        <button type="submit" className="submit-btn">Create Book</button>
      </form>
    </div>
  );
};

export default BookForm;