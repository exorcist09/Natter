import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const SelectedMember = ({handleRemoveMember,member}) => {

  return (
    <>
    <div className='flex-item item-center bg-slate-400 rounded-xl'>
        <img src="https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg" alt="" />
        <p className='px-2'>{member}</p>
        <AiOutlineClose onClick={handleRemoveMember} className='pr-1 cursor-pointer'/>
         
    </div>
    </>
  )
}

export default SelectedMember