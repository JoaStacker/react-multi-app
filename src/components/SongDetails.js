import Message from "./Message";
import SongArtist from "./SongArtist"
import SongLyrics from "./SongLyrics";

const SongDetails = ({search, lyrics, bio}) => {
    const {artist, song} = search || false

    if(!lyrics || !bio) return null;
    
    return (
        <div>
            <h2>Detalles</h2>
            {bio.artists 
                ? <SongArtist artist={bio.artists[0]}/> 
                : <Message msg={`Error. No existe el artista: "${artist}"`} bgColor="#dc3545"/>}
            {lyrics.error || lyrics.err || lyrics.name === "AbortError" 
                ? <Message msg={`Error. No existe la cancion: "${song}"`} bgColor="#dc3545"/> 
                : <SongLyrics title={search.song} lyrics={lyrics}/>}
        </div> 
    )
}


export default SongDetails;