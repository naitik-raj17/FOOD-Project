import React from 'react'
import './Profile.css'

const mockProfile = {
  name: 'Business name',
  address: '123 Market Street, City',
  totalMeals: 43,
  customersServed: '15K'
}

const mockVideos = Array.from({ length: 9 }, (_, index) => ({
  id: index,
  label: 'video'
}))

const Profile = () => {
  return (
    <div className="partner-profile-page">
      <div className="profile-card">
        <div className="profile-banner">
          <div className="avatar-wrap">
            <div className="avatar-circle">
              {mockProfile.name.charAt(0)}
            </div>
          </div>
          <div className="banner-details">
            <span className="chip primary-chip">{mockProfile.name}</span>
            <span className="chip secondary-chip">{mockProfile.address}</span>
          </div>
        </div>

        <div className="stats-bar">
          <div className="stat-card">
            <span className="stat-label">total meals</span>
            <span className="stat-value">{mockProfile.totalMeals}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">customer served</span>
            <span className="stat-value">{mockProfile.customersServed}</span>
          </div>
        </div>
      </div>

      <div className="media-panel">
        <div className="section-divider" />
        <div className="media-grid">
          {mockVideos.map(video => (
            <div className="media-tile" key={video.id}>
              <span>{video.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile