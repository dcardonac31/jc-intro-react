import React from 'react'
import { FollowCard } from './FollowCard'


export const App = () => {

  const users = [
    {
      name: 'Miguel Ángel Durán',
      userName: 'midudev',
      isFollowing: true,
    },
    {
      name: 'MrBeast',
      userName: 'MrBeast',
      isFollowing: true,
    },
    {
      name: 'Elon Musk',
      userName: 'elonmusk',
      isFollowing: true,
    },
    {
      name: 'Rubiuz Z',
      userName: 'elrubius',
      isFollowing: false,
    }
  ];


  return (
    <React.Fragment>
    {users.map(
      (user) => <FollowCard
      key={user.userName}
      userName={user.userName}
      initialIsFollowing={user.isFollowing}
      name={user.name}
      ></FollowCard>
    )}
    </React.Fragment>
  )
}
