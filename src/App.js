import './App.css';
import { Album } from './components/Album';
import imageUrl from './assets/download.jpeg';

function App() {
  return (
    <Album
    title="American Idiot"
    releaseYear={2004}
    imageUrl={imageUrl}
    artistName="Green Day"
  />
  );
}

export default App;
