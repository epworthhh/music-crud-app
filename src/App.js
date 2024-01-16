import { useState } from 'react';
import { Container, CssBaseline, Paper, Typography } from '@mui/material';
import AlbumList from './albums/AlbumList';
import AlbumForm from './albums/AlbumForm';
import albumsData from './mocks/albums';

import './App.css';

function App() {
  const [albums, setAlbums] = useState(albumsData);
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

  const isDuplicate = (newAlbum) => {
    return albums.some(
      (album) => album.title.toLowerCase() === newAlbum.title.toLowerCase()
    );
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Paper elevation={3} style={{ padding: '20px', margin: '20px auto' }}>
        <Typography variant="h3" style={{ textAlign: 'center', marginBottom: '42px' }}>
          Music Album CRUD App
        </Typography>
        <AlbumList albums={albums} onDelete={deleteAlbum} onEdit={editSelectedAlbum} />
        <AlbumForm onAdd={addAlbum} onEdit={updateAlbum} editAlbum={editAlbum} isDuplicate={isDuplicate} />
      </Paper>
    </Container>
  );
}

export default App;
