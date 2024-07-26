import React from 'react';
import ProfileCard from '../components/ProfileCard';

const name=[
    {
        title:"Account"
    },
    {
        title:"Privacy"
    },
    {
        title:"Chats"
    },
    {
        title:"Help"
    },
    {
        title:"Contact us"
    },
]
const LeftProfile = () => {
  return (
    <div className='z-50 m-5 mt-10 pt-5 pb-10'>
        {/* card */}
        {name.map((item)=><ProfileCard title={item.title}/>)}
    </div>
  )
}

export default LeftProfile