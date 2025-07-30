import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const URL =
  'https://api.unsplash.com/search/photos?client_id=hFd51wRNtDqxT14P5yaW89PjV0Xy-N1rK57NjgWkrJE&query=dog';

const Gallery = () => {
  const response = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(URL);
      return result.data;
    },
  });
  console.log(response);

  return <h2>Gallery</h2>;
};
export default Gallery;
