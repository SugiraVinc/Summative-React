import React, {useState, useEffect} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Spinner from './Spinners';

import '../singleBook.css';  // Assuming you'll move your CSS to this file

const SingleBook: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [book, setBook] = useState({})
  const {id} = useParams()

  const navigate = useNavigate()
  useEffect(() => {
    const handleData = () => {
      setIsLoading(true)
     try {
       fetch(`/api/books/${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
       })
       .then(res => res.json())
       .then((data) => {
        setBook(data)
       })
       .catch(error => console.log(error))
     } catch (error) {
       console.log(error)
     } finally {
      setIsLoading(false)
     }
    }
    handleData()
  }, [])

  const handleDelete = async(id: any) => {
   try {
     await fetch(`/api/books/delete/${id}`, {
      method: 'DELETE',
      credentials: 'include'
     })
     navigate('/book')
   } catch (error) {
    console.log(error)
   }
  }
  return (
    <section>
      <div className="singlebook">
        <div className="image-holder">
          <a href="#">
            <img src={book.image} />
          </a>
        </div>
        <div className="content">
          <div className="btn">
            <button type="button" style={{marginRight: '12px'}} onClick={() => handleDelete(book._id)}>Delete</button>
              <Link to={`/edit-book/${id}`}>
            <button type="button">Update</button>
            </Link>
          </div>
          <p>
            {book.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleBook;