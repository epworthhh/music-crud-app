import { useState } from 'react';
import AlbumList from './albums/AlbumList';
import AlbumForm from './albums/AlbumForm';

import './App.css';

function App() {
  const [albums, setAlbums] = useState([]);
  const [editAlbum, setEditAlbum] = useState(null);

  const addAlbum = (album) => {
    setAlbums([...albums, album]);
  }

  const deleteAlbum = (id) => {
    setAlbums(albums.filter((album) => album.id !== id));
  }

  const editSelectedAlbum = (id) => {
    const selectedAlbum = albums.find((album) => album.id === id);
    setEditAlbum(selectedAlbum);
  };

  const updateAlbum = (updatedAlbum) => {
    setAlbums((prevAlbums) =>
      prevAlbums.map((album) =>
        album.id === updatedAlbum.id ? updatedAlbum : album
      )
    );

    setEditAlbum(null); // clear the editAlbum state after updating
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Music Album CRUD App</h1> 
      </header>
      <div>
      <AlbumList albums={albums} onDelete={deleteAlbum} onEdit={editSelectedAlbum} />
      <AlbumForm onAdd={addAlbum} onEdit={updateAlbum} editAlbum={editAlbum} />
    </div>
    </div>
  );
}

export default App;
