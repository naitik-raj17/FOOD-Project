import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../../App.css'

const Createfood = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const videoFile = e.target.video.files[0];

    if (!videoFile) {
      setError("Please select a video file");
      setLoading(false);
      return;
    }

    if (!name) {
      setError("Food name is required");
      setLoading(false);
      return;
    }

    formData.append('mama', videoFile);
    formData.append('name', name);
    formData.append('description', description || '');

    try {
      const response = await axios.post('http://localhost:3000/api/food', formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      // Reset form
      navigate("/");
      e.target.reset();
      setVideoPreview(null);
      // Optionally navigate or show success message
      alert('Food item created successfully!');
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Failed to create food item');
    } finally {
      setLoading(false);
    }
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setVideoPreview(videoUrl);
    } else {
      setVideoPreview(null);
    }
  };

  return (
    <main className="auth-shell">
      <section className="auth-card">
        <header className="auth-header">
          <p className="eyebrow">Food partner</p>
          <h1 className="auth-title">Create Food Item</h1>
          <p className="auth-subtitle">Upload a video and add details about your food item.</p>
        </header>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="video">Video</label>
            <input
              id="video"
              name="video"
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              required
            />
            {videoPreview && (
              <div className="video-preview-container">
                <video
                  src={videoPreview}
                  controls
                  className="video-preview"
                />
              </div>
            )}
          </div>

          <div className="field">
            <label htmlFor="name">Food Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="e.g., Spicy Chicken Burger"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="description">Description (Optional)</label>
            <textarea
              id="description"
              name="description"
              placeholder="Describe your food item..."
              rows="4"
            />
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <div className="helper">
            <span>Maximum file size: 100MB. Supported formats: MP4, MOV, AVI, etc.</span>
          </div>

          <button type="submit" className="primary-btn" disabled={loading}>
            {loading ? 'Uploading...' : 'Create Food Item'}
          </button>
        </form>
      </section>
    </main>
  )
}

export default Createfood
