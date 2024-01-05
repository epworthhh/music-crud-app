import React from 'react';
import AlbumItem from './AlbumItem';

const AlbumList = ({ albums, onDelete, onEdit }) => {
  return (
    <div className='AlbumList'>
      <h2>Album List</h2>
      <ul>
        {albums.map((album) => (
          <AlbumItem key={album.id} album={album} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
