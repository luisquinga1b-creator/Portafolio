document.addEventListener("DOMContentLoaded", function() {
    
    const footerText = document.getElementById("copyright-text");
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = `&copy; ${currentYear} Luis Adrian Quinga Nacimba.`;
    }

    // 2. Animación de las barras de progreso
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width; 
        bar.style.width = '0%';             
        bar.setAttribute('data-width', targetWidth); 
    });

    // 3. Animación de revelado al hacer scroll (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase que hace visible la sección
                entry.target.classList.add('is-visible');
                
                // Si la sección tiene barras de progreso, las anima
                const bars = entry.target.querySelectorAll('.progress-bar');
                bars.forEach(bar => {
                    setTimeout(() => {
                        bar.style.width = bar.getAttribute('data-width');
                    }, 200); 
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});