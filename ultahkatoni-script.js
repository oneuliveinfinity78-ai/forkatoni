document.addEventListener('DOMContentLoaded', () => {
    const envelopeBtn = document.getElementById('envelopeBtn');
    const resetBtn = document.getElementById('resetBtn');
    const body = document.body;

    // Buka Surat
    envelopeBtn.addEventListener('click', () => {
        body.classList.add('is-open');
        
        // Reset scroll ke atas
        setTimeout(() => {
            const scrollContainer = document.querySelector('.scroll-container');
            if(scrollContainer) {
                scrollContainer.scrollTop = 0;
            }
        }, 1000);
    });

    // Tutup Surat
    resetBtn.addEventListener('click', () => {
        body.classList.remove('is-open');
    });
});