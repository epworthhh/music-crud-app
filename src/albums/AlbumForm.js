import React, { useState, useEffect } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { generateId } from '../utils';

const initialAlbumState = { title: '', artist: '' };

const AlbumForm = ({ onAdd, onEdit, editAlbum, isDuplicate }) => {
  const [album, setAlbum] = useState(initialAlbumState);
  const [errors, setErrors] = useState(initialAlbumState);

  useEffect(() => {
    setErrors(initialAlbumState);
  }, [album]);

  useEffect(() => {
    if (editAlbum) {
      setAlbum(editAlbum);
    } else {
      setAlbum(initialAlbumState);
    }
  }, [editAlbum]);

  const validateInput = () => {
    const newErrors = { title: '', artist: '' };

    if (!album.title.trim()) {
      newErrors.title = 'Title cannot be empty';
    }

    if (!album.artist.trim()) {
      newErrors.artist = 'Artist cannot be empty';
    }

    if (isDuplicate(album)) {
      newErrors.title = 'Album already exists';
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.values(newErrors).every((error) => !error);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlbum((prevAlbum) => ({ ...prevAlbum, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateInput()) {
      return;
    }

    if (editAlbum) {
      const updatedAlbum = {
        ...editAlbum,
        title: album.title,
        artist: album.artist
      };

      onEdit(updatedAlbum);
    } else {
      onAdd({ ...album, id: generateId() });
    }
    setAlbum(initialAlbumState); // reset form
  };

  return (
    <form onSubmit={handleSubmit} className="App-form">
      <Typography variant="h5" gutterBottom>
        Album Form
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <TextField
            label="Title"
            name="title"
            value={album ? album.title : ''}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.title}
            helperText={errors.title}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            label="Artist"
            name="artist"
            value={album ? album.artist : ''}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.artist}
            helperText={errors.artist}
          />
        </Grid>
        <Grid item xs={2}>
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: 25 }}>
            {editAlbum ? 'Update' : 'Add'}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AlbumForm;
