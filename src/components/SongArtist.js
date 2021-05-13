const SongArtist = ({artist}) => {
    return (
        <div>
            <h3>{artist.strArtist}</h3>
            <img src={artist.strArtistThumb} alt={artist.srtArtist}></img>
            <p>
                {artist.intBornYear} - {artist.intDiedYear || "Presente"}
            </p>
            <p>{artist.strCountry}</p>
            <p>{artist.strGenre} - {artist.strStyle}</p>
            <a href={`https://${artist.strWebsite}`} target="_blank"></a>
            <p>{artist.strBiographyEN}</p>
        </div>
    )
}

export default SongArtist
