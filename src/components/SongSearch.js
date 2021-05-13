import React, {useEffect, useState} from 'react';
import { helpHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';



const SongSearch = () => {
    const [search, setSearch] = useState(null)
    const [bio, setBio] = useState(null)
    const [lyrics, setLyrics] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(search === null) return;

        const fetchData = async () => {
            let {artist, song} = search;
            // artist = [...artist].filter(el => el !== ' ').join('');
            let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
            let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

            console.log(artistUrl, songUrl);

            setLoading(true)
            const [artistRes, songRes] = await Promise.all([ //IDEAL PARA MULTIPLES REQUESTS
                helpHttp().get(artistUrl), 
                helpHttp().get(songUrl)
            ])
            console.log(artistRes, songRes)
            setBio(artistRes)
            setLyrics(songRes)
            setLoading(false)
        }

        fetchData()
    }, [search])


    const handleSearch = (data) => {
        console.log(data)
        setSearch(data)
    }

    return (
        <div>
            <h2>Song search</h2>
            <article className="grid-1-3">
                <SongForm handleSearch={handleSearch}/>
                {loading && <Loader type={"song"}/>}
                {search && !loading && (
                    <SongDetails search={search} lyrics={lyrics} bio={bio}/>
                )}
            </article>
        </div>
    )
}




export default SongSearch