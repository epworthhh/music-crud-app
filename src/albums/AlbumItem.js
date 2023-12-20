const AlbumItem = ({ album, onEdit, onDelete }) => (
  <li key={album.id}>
    {album.title} - {album.artist}
    <button onClick={() => onEdit(album.id)}>Edit</button>
    <button onClick={() => onDelete(album.id)}>Delete</button>
  </li>
);

export default AlbumItem;
