import React, { useState, useRef, useEffect } from 'react';

function MusicPlayer({ song }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audioElement = audioRef.current;

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
      setProgress((audioElement.currentTime / audioElement.duration) * 100);
    };

    const handleLoadedMetadata = () => {
      setDuration(audioElement.duration);
    };

    audioElement.addEventListener('play', handlePlay);
    audioElement.addEventListener('pause', handlePause);
    audioElement.addEventListener('timeupdate', handleTimeUpdate);
    audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Reset player when song changes
    if (song) {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
      // Preload audio
      audioElement.load();
    }

    return () => {
      audioElement.removeEventListener('play', handlePlay);
      audioElement.removeEventListener('pause', handlePause);
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [song]);

  // Format time in MM:SS
  const formatTime = (time) => {
    if (isNaN(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Handle seek on progress bar click
  const handleSeek = (e) => {
    const seekPosition = e.nativeEvent.offsetX / e.target.clientWidth;
    audioRef.current.currentTime = seekPosition * duration;
  };

  if (!song) return null;

  return (
    <section className="music-player-container border rounded p-4 mb-5">
      <div className="row">
        <div className="col-md-3 d-flex align-items-center">
          <div className="music-note-large me-3">♪</div>
          <h5 className="mb-0">{song.title}</h5>
        </div>
        <div className="col-md-9">
          <div className="lyrics mb-3">
            {song.lyrics && song.lyrics.map((line, index) => (
              <p key={index} className={index === song.lyrics.length - 1 ? 'mb-0' : 'mb-1'}>
                {line}
              </p>
            ))}
          </div>
          
          <div className="progress mb-2" style={{ height: '5px', cursor: 'pointer' }} onClick={handleSeek}>
            <div 
              className="progress-bar" 
              role="progressbar" 
              style={{ width: `${progress}%` }}
              aria-valuenow={progress} 
              aria-valuemin="0" 
              aria-valuemax="100"
            ></div>
          </div>
          
          <div className="d-flex justify-content-between mb-2">
            <small>{formatTime(currentTime)}</small>
            <small>{formatTime(duration)}</small>
          </div>
          
          <audio ref={audioRef} controls className="w-100">
            <source src={song.audioSrc} type="audio/mpeg" />
            Trình duyệt của bạn không hỗ trợ phát âm thanh.
          </audio>
        </div>
      </div>
    </section>
  );
}

export default MusicPlayer; 