document.querySelectorAll('.hexagon img').forEach(img => {
            img.addEventListener('mouseover', function() {
                // Obține dimensiunile naturale ale imaginii
                const naturalWidth = this.naturalWidth;
                const naturalHeight = this.naturalHeight;

                // Setează dimensiunile naturale pentru imaginea mărită
                this.style.width = naturalWidth + 'px';
                this.style.height = naturalHeight + 'px';
            });

            img.addEventListener('mouseout', function() {
                // Revine la dimensiunile inițiale
                this.style.width = '100%';
                this.style.height = '100%';
            });
        });