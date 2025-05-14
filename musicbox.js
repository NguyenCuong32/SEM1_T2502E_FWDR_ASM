import './musicbox.css';

function Musicbox() {
    return (
        <div className="song-box">
            <audio controls className="audio-player">
                <source src="../chericheri.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <div className="song-body">
                <div className="song-info">
                    <img src="../iconNhac.jpg" alt="icon" className="song-icon" />
                    <span className="song-title">Cheri Cheri Lady</span>
                </div>
                <div className="lyrics">
                    <p>Oh I cannot explain</p>
                    <p>Every time it's the same</p>
                    <p>Oh I feel that it's real</p>
                    <p>Take my heart, I've been lonely too long...</p>
                </div>
            </div>
        </div>
    );
}

export default Musicbox;