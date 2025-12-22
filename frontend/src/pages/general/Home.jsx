import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const [foodItems, setFoodItems] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const containerRef = useRef(null)
  const videoRefs = useRef([])

  useEffect(() => {
    fetchFoodItems()
  }, [])

  useEffect(() => {
    // Auto-play current video and pause others
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.play().catch(err => console.log('Auto-play prevented:', err))
        } else {
          video.pause()
        }
      }
    })
  }, [currentIndex])

  const fetchFoodItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/food', {
        withCredentials: true
      })
      setFoodItems(response.data.foodItems || [])
      setLoading(false)
    } catch (error) {
      console.error('Error fetching food items:', error)
      setLoading(false)
    }
  }

  const handleScroll = (e) => {
    const container = containerRef.current
    if (!container) return

    const scrollTop = container.scrollTop
    const containerHeight = container.clientHeight
    const newIndex = Math.round(scrollTop / containerHeight)

    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < foodItems.length) {
      setCurrentIndex(newIndex)
    }
  }

  const handleVisitStore = (foodItem) => {
    // TODO: Navigate to store page or handle store visit
    console.log('Visit store for:', foodItem)
  }

  const truncateDescription = (text, maxLines = 2) => {
    if (!text) return ''
    // Simple truncation - in a real app, you might want more sophisticated line clamping
    const words = text.split(' ')
    const maxChars = maxLines * 50 // Approximate chars per line
    if (text.length <= maxChars) return text
    return text.substring(0, maxChars).trim() + '...'
  }

  if (loading) {
    return (
      <div className="video-feed-loading">
        <p>Loading videos...</p>
      </div>
    )
  }

  if (foodItems.length === 0) {
    return (
      <div className="video-feed-empty">
        <p>No food videos available</p>
      </div>
    )
  }

  return (
    <div className="video-feed-container" ref={containerRef} onScroll={handleScroll}>
      {foodItems.map((item, index) => (
        <div key={item._id || index} className="video-item">
          <video
            ref={el => (videoRefs.current[index] = el)}
            className="video-player"
            src={item.video}
            loop
            muted
            playsInline
          />
          <div className="video-overlay">
            <div className="video-content">
              {item.description && (
                <p className="video-description">
                  {truncateDescription(item.description, 2)}
                </p>
              )}
              <Link
                className="visit-store-btn"
                to={`/food-partner/${item._id}`}
              >
                Visit Store
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
