import React, {useState} from 'react';

const ProfileCard: React.FC<ProfileProps> = ({
  name,
  language,
  district,
  status,
  description,  
  photoUrl = 'https://via.placeholder.com/150',
}) => {
  const [state, setState] = useState<'creation' | 'profile' | 'view'>('creation');

  return (
    <div className="profile-card">
      <div className="grid-container">
        <div className="profile-photo">
          <img src={photoUrl} alt={`${name}'s avatar`} />
        </div>
        <div className="profile-info">
          <h2>{name}</h2>
          <p><strong>Spoken Language:</strong> {language}</p>
          <p><strong>NN district:</strong> {district}</p>
          <p><strong>Status:</strong> {status}</p>
          <p><strong>Description:</strong> {description}</p>
        </div>
        <div className="profile-actions">
          {state === "creation" && (
            <button onClick={() => useState('profile')}>Create</button> 
          )}
          {state === "profile" && (
            <button onClick={() => useState('view')}>Create</button> 
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;