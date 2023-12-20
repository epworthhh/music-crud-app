import React, { useState, useEffect } from 'react';
import { generateId } from '../utils';

const initialAlbumState = { title: '', artist: '' };

const AlbumForm = ({ onAdd, onEdit, editAlbum }) => {
  const [album, setAlbum] = useState(initialAlbumState);

  useEffect(() => {
    if (editAlbum) {
      setAlbum(editAlbum);
    } else {
      // reset form if there's no editAlbum
      setAlbum(initialAlbumState);
    }
  }, [editAlbum]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlbum((prevAlbum) => ({ ...prevAlbum, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editAlbum) {
      const updatedAlbum = {
        ...editAlbum,
        title: album.title,
        artist: album.artist
      };

      onEdit(updatedAlbum);
    } else {
      onAdd({...album, id: generateId() });
    }
    setAlbum(initialAlbumState); // reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={album ? album.title : ''}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Artist:
        <input
          type="text"
          name="artist"
          value={album ? album.artist : ''}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">{editAlbum ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default AlbumForm;
