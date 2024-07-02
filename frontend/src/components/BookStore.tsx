import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../bookStore.css'

interface Book {
  id: number;
  src: string;
  alt: string;
}

interface FormData {
  firstname: string;
  lastname: string;
  country: string;
  subject: string;
}

const BookZone: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    country: 'india',
    subject: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the form data to a server
  };

  const books: Book[] = [
    { id: 1, src: './images/img_2.jpg', alt: 'img-1' },
    { id: 2, src: './images/img_3.jpeg', alt: 'img-2' },
    { id: 3, src: './images/img_4.jpg', alt: 'img-3' },
    { id: 4, src: './images/img_5.jpg', alt: 'img-4' },
    { id: 5, src: './images/img_6.jpg', alt: 'img-5' },
    { id: 6, src: './images/img_7.jpg', alt: 'img-6' },
    { id: 7, src: './images/img_8.jpg', alt: 'img-7' },
    { id: 8, src: './images/img_9.jpg', alt: 'img-8' },
    { id: 9, src: './images/img_10.jpg', alt: 'img-9' },
    { id: 10, src: './images/img_11.jpg', alt: 'img-10' },
  ];

  return (
    <div>
      <div className="section-2">
        <h2>Available Books</h2>
        <div className="gallery">
          {books.map((book) => (
            <div key={book.id} className="image-holder" style={{ marginRight: '20px' }}>
              <a href="#">
                <img src="https://www.griffithreview.com/wp-content/uploads/2024/03/glasses-1052010_640_Dariusz-Sankowski-from-Pixabay.jpg" alt={book.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="section-5">
        <h2>Contact Us</h2>
        <p>leave us a message or suggestion:</p>

        <div className="column">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">First Name</label>
            <input 
              type="text" 
              id="fname" 
              name="firstname" 
              placeholder="Your name.."
              value={formData.firstname}
              onChange={handleChange}
            />

            <label htmlFor="lname">Last Name</label>
            <input 
              type="text" 
              id="lname" 
              name="lastname" 
              placeholder="Your last name.."
              value={formData.lastname}
              onChange={handleChange}
            />

            <label htmlFor="country">Country</label>
            <select 
              id="country" 
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="india">India</option>
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>

            <label htmlFor="subject">Subject</label>
            <textarea 
              id="subject" 
              name="subject" 
              placeholder="Write something.." 
              style={{height: '170px'}}
              value={formData.subject}
              onChange={handleChange}
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookZone;