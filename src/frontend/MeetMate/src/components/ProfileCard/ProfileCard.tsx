import React, {useState} from 'react';
import './ProfileCard.scss';
import { get } from 'http';

interface ProfileProps {
  name: string;
  language: string;
  district: string;
  status: string;
  description: string;
  photoUrl?: string;
}

const ProfileCard: React.FC<ProfileProps> = ({
  name,
  language,
  district,
  status,
  description,  
  photoUrl = 'https://via.placeholder.com/150',
}) => {
  const [state, setState] = useState<'creation' | 'profile' | 'view'>('creation');

  const getProfileCardClass = () => {
    if (state === "profile") {
      return "profile-card profile-card--profile";
    } else if (state === "creation") {
      return "profile-card profile-card--creation";
    } else {
      return "profile-card";
    }
  };

  return (
    <div className={getProfileCardClass()}>
      <div className="grid-container">
        <div className="profile-header">
          <div className="profile-photo">
            <img src={photoUrl} alt={`${name}'s avatar`} />
          </div>
          <div className="profile-info">
            <h2>{name}</h2>
            <p><strong>Spoken Language:</strong> {language}</p>
            <p><strong>NN district:</strong> {district}</p>
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Description:</strong></p>
          </div>
        </div>
        <div className="profile-footer">
          <p className="profile-description">{description}</p>
          <div className="profile-actions">
            {state === "creation" && (
              <button onClick={() => setState('profile')}>Create</button>
            )}
            {state === "profile" && (
              <button onClick={() => setState('view')}>Option</button> 
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;