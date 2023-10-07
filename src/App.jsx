import './App.css';
import React from 'react'
import { FollowCard } from './FollowCard'


export const App = () => {
  const formatUserName = (username) => `@${username}`

  const users = [
    {
      name: 'Miguel Ángel Durán',
      userName: 'midudev',
      isFollowing: true,
      format: formatUserName,
    },
    {
      name: 'MrBeast',
      userName: 'MrBeast',
      isFollowing: true,
      format: formatUserName,
    },
    {
      name: 'Elon Musk',
      userName: 'elonmusk',
      isFollowing: true,
      format: formatUserName,
    },
    {
      name: 'Rubiuz Z',
      userName: 'elrubius',
      isFollowing: false,
      format: formatUserName,
    }
  ];


  return (
    <section className='container'>
      <div className='content'>
        {users.map(
          (user) => 
          <FollowCard
            key={user.userName}
            userName={user.userName}
            initialIsFollowing={user.isFollowing}
            format={user.format}
          ><strong>{user.name}</strong></FollowCard>
        )}
      </div>
    </section>


  )
}
