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
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  const [videos, setVideos] = useState([])

  // const Videos = Array.from({ length: 9 }, (_, index) => ({
  // id: index,
  // label: 'video'

useEffect(()=>{
const fetchProfile = async () =>{
try{
const response = await axios.get(`http://localhost:3000/api/food-partner/${id}`,
{
withCredentials:true
});
const profileData = response.data.foodPartner;
setProfile(profileData);
// Set videos from foodItems
if(profileData.foodItems && profileData.foodItems.length > 0){
  setVideos(profileData.foodItems);
}
} catch(err){
setError("Failed to load profile");
console.error(err);
}
finally{
setLoading(false);
}
};

fetchProfile();
},[id])





if(loading) return <div> Loading profile... </div>;
if(error) return <div> {error}</div>;

  return (
    <div className="partner-profile-page">
      <div className="profile-card">
        <div className="profile-banner">
          <div className="avatar-wrap">
              <img className="avatar-circle" src="https://thumbs.dreamstime.com/b/woman-looking-away-beautiful-girl-profile-outdoors-34938071.jpg?w=768" alt="" />
    
          </div>
          <div className="banner-details">
            <span className="chip primary-chip">{profile?.businessName || profile?.name}</span>
            <span className="chip secondary-chip">{profile?.phone || profile?.email}</span>
          </div>
        </div>

        <div className="stats-bar">
          <div className="stat-card">
            <span className="stat-label">total meals</span>
            <span className="stat-value">{profile?.foodItems?.length || 0}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">customer served</span>
            <span className="stat-value">-</span>
          </div>
        </div>
      </div>

      <div className="media-panel">
        <div className="section-divider" />
        <div className="media-grid">
          {/* {Videos.map(video => (
            <div className="media-tile" key={video.id}>
              <span>{video.label}</span>
            // </div>
          ))} */}

          {
            videos.map((v)=>(
              <div key={v._id || v.id} className='profile-grid-item'>
                
                  <video
                    className='profile-grid-video'
                    style={{objectFit:'cover',width:'100%',height:'100%'}}
                  
                  src={v.video} muted></video>
              </div> 
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Profile