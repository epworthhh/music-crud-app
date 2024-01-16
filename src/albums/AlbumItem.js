import { Button, Grid, Paper, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from '@mui/material/styles';

const AlbumContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ButtonContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
  '& > button:first-of-type': {
    marginRight: theme.spacing(1), // Add margin between buttons
  },
}));

const AlbumItem = ({ album, onEdit, onDelete }) => (
  <Grid item key={album.id} xs={12} sm={6} md={4} lg={3}>
    <AlbumContainer>
      <Typography variant="subtitle1">{album.title}</Typography>
      <Typography variant="body2" color="textSecondary">
        {album.artist}
      </Typography>
      <ButtonContainer>
        <Button variant="outlined" color="primary" onClick={() => onEdit(album.id)}>
          <EditIcon />
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => onDelete(album.id)}>
          <DeleteIcon />
        </Button>
      </ButtonContainer>
    </AlbumContainer>
  </Grid>
);

export default AlbumItem;
