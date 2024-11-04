import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { db, auth } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function LobbyPage() {
  const navItems = ['TRACKER', 'ARSENAL', 'MORE', 'DOWNLOAD'];
  const [playerName, setPlayerName] = useState(''); // Default value for the middle card
  const [level, setLevel] = useState('55'); // Default level for the middle card

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(db, 'users', user.uid, 'teambuild', 'data');
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            setPlayerName(docSnap.data().playerName || 'Jett_Wind');
            setLevel(docSnap.data().level || '55');
          }
        } else {
          console.log('No user is signed in');
        }
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayerData();
  }, []);

  const players = [
    { image: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729532856/img1_jiui9q.png', level: '42', username: 'Reyna_Main', Rate: '1.4', PreferredWeapon: 'Vandal', PreferredRole: 'Duelist', PreferredAgent: 'Reyna', rank: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729530636/silver_hduzwi.png' },
    { image: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730641830/img2_hyzzwb.png', level: '38', username: 'Neon_Spark', Rate: '1.3', PreferredWeapon: 'Phantom', PreferredRole: 'Duelist', PreferredAgent: 'Neon', rank: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729530636/silver_hduzwi.png' },
    { image: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729530434/img3_wzzpe9.png', level, username: playerName, Rate: '1.5', PreferredWeapon: 'Vandal', PreferredRole: 'Duelist', PreferredAgent: 'FlyingJaat', rank: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729530636/silver_hduzwi.png' },
    { image: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730642615/img4_pskgvr.png', level: '47', username: 'Omen_Shadow', Rate: '1.6', PreferredWeapon: 'Guardian', PreferredRole: 'Controller', PreferredAgent: 'Omen', rank: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729530636/silver_hduzwi.png' },
    { image: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1730641961/img5_kwme6f.png', level: '51', username: 'Raze_Boom', Rate: '1.7', PreferredWeapon: 'Vandal', PreferredRole: 'Duelist', PreferredAgent: 'Raze', rank: 'https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729530636/silver_hduzwi.png' },
  ];

  return (
    <div className="h-screen overflow-hidden bg-center relative" style={{ backgroundImage: "url('https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729529714/lobby_hmamhg.png')", backgroundSize: 'cover' }}>
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="relative z-10 p-6 h-full">
        <div className="flex items-center justify-between">
          <Link to='/' className="bg-black inline-block rounded p-2">
            <img 
              src="https://res.cloudinary.com/dbt5dmcu2/image/upload/v1729416747/logo_ijecpr.png" 
              alt="Valorant Logo" 
              className="h-24 w-40 object-contain"
            />
          </Link>

          <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                className="bg-red-600 text-black px-6 py-3 rounded-full flex items-center text-[14px] font-bold hover:bg-red-800 transition-colors duration-200 w-50"
              >
                {item}
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            ))}
          </nav>
        </div>

        <div className="relative w-full h-full mx-auto mt-20">
          {players.map((player, index) => (
            <div key={index} className="group absolute inline-block" 
            style={{ 
              bottom: index === 2 ? '0%' : index === 0 || index === 4 ? '25%' : '15%', 
              left: index === 0 ? '0%' : index === 1 ? '20%' : index === 2 ? '40%' : index === 3 ? '60%' : '80%', 
            }}>
              <div className="transition-transform duration-300 group-hover:translate-y-[-180px] flex flex-col items-center">
                <div className="relative flex flex-col items-center">
                  <div className="absolute top-0 left-0 right-0 p-3 text-center z-10 mt-2">
                    <span className="text-white text-[16px] font-bold">Lvl {player.level}</span>
                  </div>
                  <img
                    src={player.image}
                    alt={player.username}
                    className="w-[225px] h-auto"
                  />
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8 flex justify-center">
                    <img
                      src={player.rank}
                      alt="Rank"
                      className="w-36 h-36 object-contain"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 mb-6 text-center">
                    <span className="text-white text-[15px] font-bold">{player.username}</span>
                  </div>
                </div>

                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center space-y-3 w-full">
                  <button className="bg-red-600 text-white py-3 px-6 w-72 font-bold text-base ">H/S Rate: {player.Rate}</button>
                  <button className="bg-red-600 text-white py-3 px-6 w-72 font-bold text-base ">Preferred Weapon: {player.PreferredWeapon}</button>
                  <button className="bg-red-600 text-white py-3 px-6 w-72 font-bold text-base ">Preferred Role: {player.PreferredRole}</button>
                  <button className="bg-red-600 text-white py-3 px-6 w-72 font-bold text-base ">Preferred Agent: {player.PreferredAgent}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
