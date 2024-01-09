import React, { useState, useEffect } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
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
    <form onSubmit={handleSubmit} className="App-form">
      <Typography variant="h5">
        Album Form
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={5}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={album ? album.title : ''}
            onChange={handleChange}
            variant="outlined"
            required
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            fullWidth
            label="Artist"
            name="artist"
            value={album ? album.artist : ''}
            onChange={handleChange}
            variant="outlined"
            required
            />
        </Grid>
        <Grid item xs={2}>
          <Button type="submit" variant="contained" color="primary">
            {editAlbum ? 'Update' : 'Add'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AlbumForm;
