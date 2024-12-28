import React from 'react'
import Bookmark from '../Bookmark/Bookmark'

export default function Bookmarks({bookmarks,readingTime}) {
    
  return (
    <div className='md:w-1/3 bg-gray-300 ml-4 mt-2 pt-3'>
        <div>
            <h3 className='text-2xl font-bold'>Reading Time: {readingTime}</h3>
        </div>
      <h2 className='text-xl text-center font-bold '>Bookmarked Blogs: {bookmarks.length}</h2>
      {
        bookmarks.map(bookmark=> <Bookmark bookmark={bookmark}></Bookmark>)
      }
    </div>
  )
}
