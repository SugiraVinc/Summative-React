import React, { useState,useEffect} from 'react';
import { setBookInfo } from '../slices/bookSlice/bookSlice';
import Spinner from './Spinners';
import { Link } from 'react-router-dom';
import '../bookStore.css'
import { useDispatch } from 'react-redux';




const BookZone: React.FC = () => {
 const [isLoading, setIsLoading] = useState(false)
 const [books, setBooks] = useState([])
 const dispacth = useDispatch()

 useEffect(() => {
  const handleData = () => {
    setIsLoading(true)
    try {
       fetch('/api/books', {
        method: 'GET',
        credentials: 'include',
        headers: {"Content-Type": "application/json"}
       })
       .then(res => res.json())
       .then(data => {
        setBooks(data)
        dispacth(setBookInfo(data))
       })
       .catch(error => console.log(error))
    } catch (error) {
       console.log(error)
    } finally {
        setIsLoading(false)
    }
    
  }
  handleData()
 }, [books])

  return isLoading ? <Spinner/> :  (
    <div>
      <div className="section-2">
        <h2>Available Books</h2>
        <div className="gallery">
          {books.map((book: any) => (
            <div key={book._id} className="image-holder" style={{ marginRight: '20px' }}>
              <Link to={`/single-book/${book._id}`}>
                <img src={book.image} alt={book.description} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookZone;