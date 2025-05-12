import React, { useState, useEffect } from 'react';
import './App.css';

const Music = () => {
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchSongs();
    }, []);

    const fetchSongs = async () => {
        try {
            // Replace this URL with your actual API endpoint
            const response = await fetch('YOUR_API_ENDPOINT_HERE');
            if (!response.ok) {
                throw new Error('Failed to fetch songs');
            }
            const data = await response.json();
            setSongs(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="music-container">
            <header className="music-header">
                <h1>My Music Website</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#playlist">Playlist</a></li>
                        <li><a href="#library">Library</a></li>
                    </ul>
                </nav>
            </header>

            <main className="music-content">
                <section className="song-list">
                    <h2>Popular Songs</h2>
                    {songs.map((song) => (
                        <div key={song.id} className="song-item">
                            <h3>{song.title}</h3>
                            <p>{song.artist}</p>
                            <span>{song.duration}</span>
                        </div>
                    ))}
                </section>
            </main>

            <footer className="music-footer">
                <p>&copy; 2023 Music Website. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Music;