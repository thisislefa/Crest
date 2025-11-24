document.addEventListener('DOMContentLoaded', () => {
            const videoCard = document.getElementById('videoTrigger');
            const video = document.getElementById('mainVideo');

            // Toggle video play on click
            videoCard.addEventListener('click', () => {
                if (!videoCard.classList.contains('is-playing')) {
                    // Start playing
                    videoCard.classList.add('is-playing');
                    video.play();
                }
            });

            // Reset when video ends (optional)
            video.addEventListener('ended', () => {
                videoCard.classList.remove('is-playing');
                // video.load(); // Resets poster
            });
        });