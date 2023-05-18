import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Dashboard = () => {
  // Variables for Saved Trips
  const [day, setDay] = useState('');
  const [when, setWhen] = useState('');
  const [city, setCity] = useState('');
  const [attractions, setAttractions] = useState([]);

  // Variables for Blogpost
  const [postTitle, setPostTitle] = useState('');
  const [dateCreated, setDateCreated] = useState('');
  const [post, setPost] = useState('');

  // Saved Trip logic
  const handleSaveTrip = () => {
    console.log('Trip saved!');
    console.log('Day:', day);
    console.log('When:', when);
    console.log('City:', city);
    console.log('Attraction List:', attractions);
  };

  // Attraction logic
  const handleAddAttraction = () => {
    const newAttraction = 'New Attraction';
    setAttractions([...attractions, newAttraction]);
  };

  // Save Post logic
  const handleSavePost = () => {
    console.log('Post saved!');
    console.log('Post Title:', postTitle);
    console.log('Date Created:', dateCreated);
    console.log('Post:', post);
  };

  const handlePlanTrip = () => {
    console.log('Plan a trip!');
  };

  const handleWriteBlogPost = () => {
    console.log('Write a blog post!');
  };

  const handleViewBlogPosts = () => {
    console.log('View blog posts');
  };

  return (
    <div>
      <Header />
      <h2>Dashboard</h2>
      <div>
        <h3>Saved Trips</h3>
        <p>Day: {day}</p>
        <label htmlFor="day">Day:</label>
        <input
          type="text"
          id="day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />

        <label htmlFor="when">When:</label>
        <input
          type="text"
          id="when"
          value={when}
          onChange={(e) => setWhen(e.target.value)}
        />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label htmlFor="attractions">Attraction List:</label>
        <ul>
          {attractions.map((attraction, index) => (
            <li key={index}>{attraction}</li>
          ))}
        </ul>

        <button type="button" onClick={handleAddAttraction}>
          Add Attraction
        </button>

        <button type="button" onClick={handleSaveTrip}>
          Save Trip
        </button>
      </div>

      <div>
        <h3>Plan a Trip</h3>
        <button type="button" onClick={handlePlanTrip}>
          Plan a Trip
        </button>
      </div>

      <div>
        <h3>Write a Blog Post</h3>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />

        <label htmlFor="dateCreated">Date Created:</label>
        <input
          type="text"
          id="dateCreated"
          value={dateCreated}
          onChange={(e) => setDateCreated(e.target.value)}
        />

        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>

        <button type="button" onClick={handleSavePost}>
          Save Post
        </button>
      </div>

      <div>
        <h3>Blog Posts</h3>
        <button type="button" onClick={handleViewBlogPosts}>
          View Blog Posts
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;