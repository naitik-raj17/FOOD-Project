import React,{useState,useEffect} from 'react'
import './Profile.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'

// const mockProfile = {
//   name: 'Business name',
//   address: '123 Market Street, City',
//   totalMeals: 43,
//   customersServed: '15K'
// }



const Profile = () => {
  const {id} = useParams();
  const [profile,setProfile]= useState(null);

  const Videos = Array.from({ length: 9 }, (_, index) => ({
  id: index,
  label: 'video'
}))

useEffect(()=>{
  axios.get(`http://localhost:3000/api/food-partner/${id}`,
    {
      withCredentials:true
    })
    .then(response=>{
      setProfile(response.data.foodPartner)
    })
},[id])




  return (
    <div className="partner-profile-page">
      <div className="profile-card">
        <div className="profile-banner">
          <div className="avatar-wrap">
            <div className="avatar-circle">
              {profile.name?.charAt(0)}
            </div>
          </div>
          <div className="banner-details">
            <span className="chip primary-chip">{profile.name}</span>
            <span className="chip secondary-chip">{profile.address}</span>
          </div>
        </div>

        <div className="stats-bar">
          <div className="stat-card">
            <span className="stat-label">total meals</span>
            <span className="stat-value">{profile.totalMeals}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">customer served</span>
            <span className="stat-value">{profile.customersServed}</span>
          </div>
        </div>
      </div>

      <div className="media-panel">
        <div className="section-divider" />
        <div className="media-grid">
          {Videos.map(video => (
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