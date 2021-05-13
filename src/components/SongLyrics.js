const SongLyrics = ({title, lyrics}) => {
    return (
        <section>
            <h3>{title.split(' ').map(el => `${[...el][0].toUpperCase()}${el.slice(1)}`).join(' ')}</h3>
            <blockquote style={{whiteSpace: 'pre-wrap'}}>{lyrics.lyrics}</blockquote>
        </section>
    )
}

export default SongLyrics
