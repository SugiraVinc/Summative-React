import React from 'react';
import '../singleBook.css';  // Assuming you'll move your CSS to this file

const SingleBook = () => {
  return (
    <section>
      <div className="singlebook">
        <div className="image-holder">
          <a href="#">
            <img src="https://www.griffithreview.com/wp-content/uploads/2024/03/glasses-1052010_640_Dariusz-Sankowski-from-Pixabay.jpg" alt="From Goethe to Gundolf" />
          </a>
        </div>
        <div className="content">
          <div className="btn">
            <button type="button">Delete</button>
            <button type="button">Update</button>
          </div>
          <p>
            Johann Wolfgang von Goethe (born August 28, 1749, Frankfurt am Main [Germany]—died March 22, 1832, Weimar, Saxe-Weimar) was a German poet, playwright, novelist, scientist, statesman, theatre director, critic, and amateur artist, considered the greatest German literary figure of the modern era
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleBook;