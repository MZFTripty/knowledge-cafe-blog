/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { IoBookmarksOutline } from "react-icons/io5";

export default function Blog({blog,handleAddToBookmark,handleMarkAsRead}) {
    const {id,title,cover,reading_time,author_img,author,posted_date,hashtags} = blog;
  return (
    <div className='mb-20 space-y-4'>
        <img className='w-full mb-7' src={cover} alt={`cover picture of the title ${title}`} />
        <div className='flex justify-between mb-7 '>
            <div className='flex'>
                <img className='w-10 h-10 rounded-full ' src={author_img} alt="" />
                <div className='ml-5'>
                    <h3 className='text-sm'>{author}</h3>
                    <p className='text-sm'>{posted_date}</p>
                </div>
            </div>
            <div>
                <span>{reading_time} min read</span>
                <button onClick={()=>handleAddToBookmark(blog)}className='ml-2'><IoBookmarksOutline /></button>
            </div>
        </div>
      <h2 className="text-4xl ">{title}</h2>
      <p>
        {
            hashtags.map(hash => <span><a href=''>{hash}</a></span>)
        }
      </p>
      <button onClick={()=> handleMarkAsRead(id, reading_time)} className='text-purple-800 font-bold underline'>Mark As Read</button>
    </div>
  )
}
