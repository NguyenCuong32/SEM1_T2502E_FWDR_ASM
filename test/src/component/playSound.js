import './playSound.css';

function PlaySound() {
    return (
        <div className="container song-box">
            <audio controls src="/mp3/song.mp3"></audio>
            <div className="song-content">
                <div className="song-name">
                    <img src="/images/icon.png" alt="Icon" />
                    <span className="title">Take me to your heart</span>
                </div>
                <div className="song-lyrics">
                    <p>Take me to your heart, take me to your soul</p>
                    <p>Give me your hand before I'm old</p>
                    <p>Show me what love is, haven't got a clue</p>
                    <p>Show me that wonders can be true</p>
                </div>
            </div>
        </div>

    );
}

export default PlaySound;