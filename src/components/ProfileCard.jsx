import React from 'react';
import Card from './Card';
import './ProfileCard.css';

const ProfileCard = () => {
  const profiles = [
    {
      id: 1,
      name: 'Jack',
      age: 23,
      sex: 'male',
      profession: 'software engineer'
    },
    {
      id: 2,
      name: 'Mary',
      age: 25,
      sex: 'female',
      profession: 'doctor'
    }
  ];

  return (
    <div className="profile-container">
      <h2>Profile Card</h2>
      <div className="profile-list">
        {profiles.map(profile => (
          <div key={profile.id} className="profile-card">
            <Card 
              name={profile.name}
              age={profile.age}
              sex={profile.sex}
              profession={profile.profession}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard; 