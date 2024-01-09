import React from 'react';
import AlbumItem from './AlbumItem';
import { Grid, Typography } from '@mui/material';

const AlbumList = ({ albums, onDelete, onEdit }) => {
  return (
    <Grid>
      <Typography variant="h5">
        Album List
      </Typography>
      <Grid container spacing={2}>
        {albums.map((album) => (
          <AlbumItem key={album.id} album={album} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </Grid>
    </Grid>
  );
};

export default AlbumList;
