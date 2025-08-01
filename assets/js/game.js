// Variables para optimización
let scrollTimeout;
let isScrolling = false;

// Efecto de difuminado al hacer scroll - Optimizado con throttling
window.addEventListener("scroll", () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            const mainImage = document.querySelector("#main-image img");
            const scrollY = window.scrollY;

            // Aplicar estilos directamente sin CSS
            if (scrollY > 150) {
                mainImage.style.opacity = '0';
                mainImage.style.transition = 'opacity 0.3s ease';
                mainImage.style.pointerEvents = 'none';
            } else {
                mainImage.style.opacity = '1';
                mainImage.style.transition = 'opacity 0.3s ease';
                mainImage.style.pointerEvents = 'auto';
            }
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Filtro de juegos por ID - Optimizado con debouncing
function filterGames() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        const games = document.querySelectorAll('.game');

        // Usar DocumentFragment para optimizar manipulación del DOM
        games.forEach(game => {
            const gameID = game.getAttribute('data-id').toLowerCase();
            const shouldShow = gameID.includes(searchInput);
            
            // Optimización: solo cambiar si es necesario
            if (shouldShow && game.style.display === 'none') {
                game.style.display = 'block';
            } else if (!shouldShow && game.style.display !== 'none') {
                game.style.display = 'none';
            }
        });
    }, 150); // Debounce de 150ms
}

// Función para crear imagen optimizada solo con JavaScript
function createOptimizedImage(imgSrc, altText, title) {
    const img = document.createElement('img');
    
    // Configuración básica
    img.alt = altText;
    img.title = title;
    img.loading = 'lazy'; // Lazy loading nativo
    
    // Estilos aplicados directamente
    img.style.opacity = '0';
    img.style.transform = 'translateY(20px)';
    img.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    img.style.backgroundColor = '#f0f0f0';
    img.style.minHeight = '200px';
    img.style.width = '100%';
    img.style.height = 'auto';
    
    // Placeholder animado con JavaScript puro
    let placeholderAnimation;
    const animatePlaceholder = () => {
        let opacity = 0.3;
        let increasing = true;
        
        placeholderAnimation = setInterval(() => {
            if (increasing) {
                opacity += 0.05;
                if (opacity >= 0.8) increasing = false;
            } else {
                opacity -= 0.05;
                if (opacity <= 0.3) increasing = true;
            }
            img.style.backgroundColor = `rgba(240, 240, 240, ${opacity})`;
        }, 100);
    };
    animatePlaceholder();
    
    // Manejo de errores
    img.onerror = function() {
        clearInterval(placeholderAnimation);
        this.style.backgroundColor = '#ddd';
        this.style.color = '#999';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        this.style.fontSize = '14px';
        this.innerHTML = 'Imagen no disponible';
        this.style.filter = 'grayscale(100%)';
    };
    
    // Evento de carga exitosa
    img.onload = function() {
        clearInterval(placeholderAnimation);
        this.style.backgroundColor = 'transparent';
        this.style.opacity = '1';
        this.style.transform = 'translateY(0)';
    };
    
    // Intersection Observer para carga eficiente
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = imgSrc;
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px'
        });
        
        imageObserver.observe(img);
    } else {
        img.src = imgSrc;
    }
    
    return img;
}

// Función para aplicar estilos de optimización a todos los elementos del juego
function applyGameOptimizations(gameDiv) {
    // Aplicar estilos de contenedor para optimización
    gameDiv.style.contain = 'layout style paint';
    gameDiv.style.willChange = 'transform';
    gameDiv.style.transform = 'translateZ(0)'; // Aceleración por hardware
    gameDiv.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    
    return gameDiv;
}

// Función optimizada para añadir los juegos al DOM
function addGameToGallery({id, imgSrc, altText, title, downloadLink2}) {
    const gallery = document.getElementById('gallery');
    const gameDiv = document.createElement('div');
    gameDiv.classList.add('game');
    gameDiv.setAttribute('data-id', id);

    // Aplicar optimizaciones de rendimiento
    applyGameOptimizations(gameDiv);

    // Crear imagen optimizada
    const optimizedImg = createOptimizedImage(imgSrc, altText, title);
    
    // Crear elementos restantes con estilos optimizados
    const titleP = document.createElement('p');
    titleP.textContent = title;
    titleP.style.margin = '10px 0';
    titleP.style.fontSize = '16px';
    titleP.style.fontWeight = 'bold';
    
    const downloadBtn = document.createElement('button');
    downloadBtn.textContent = 'Descargar 🌐';
    downloadBtn.style.padding = '10px 20px';
    downloadBtn.style.backgroundColor = '#dc2626';
    downloadBtn.style.color = 'white';
    downloadBtn.style.border = 'none';
    downloadBtn.style.borderRadius = '5px';
    downloadBtn.style.cursor = 'pointer';
    downloadBtn.style.transition = 'background-color 0.2s ease, transform 0.1s ease';
    
    // Efectos hover con JavaScript
    downloadBtn.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#0056b3';
        this.style.transform = 'translateY(-2px)';
    });
    
    downloadBtn.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#007bff';
        this.style.transform = 'translateY(0)';
    });
    
    downloadBtn.onclick = () => window.location.href = downloadLink2;
    
    // Añadir elementos al contenedor
    gameDiv.appendChild(optimizedImg);
    gameDiv.appendChild(titleP);
    gameDiv.appendChild(downloadBtn);

    // Usar DocumentFragment para mejor rendimiento
    const fragment = document.createDocumentFragment();
    fragment.appendChild(gameDiv);
    gallery.appendChild(fragment);
    
    // Aplicar observer al nuevo elemento
    if (window.gameObserver) {
        window.gameObserver.observe(gameDiv);
    }
}

// Función para pre-cargar imágenes críticas
function preloadCriticalImages(imageSources) {
    imageSources.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Optimización del modal con animaciones JavaScript puras
document.addEventListener('DOMContentLoaded', function() {
    const floatingButton = document.querySelector('.custom-floating-button');
    const modal = document.querySelector('.custom-modal');

    if (floatingButton && modal) {
        // Aplicar estilos iniciales al modal
        modal.style.transition = 'opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease';
        modal.style.willChange = 'opacity, visibility, transform';
        
        floatingButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            requestAnimationFrame(() => {
                const isHidden = modal.style.opacity === '0' || modal.style.opacity === '' || modal.classList.contains('hidden');
                
                if (isHidden) {
                    // Mostrar modal
                    modal.style.opacity = '1';
                    modal.style.visibility = 'visible';
                    modal.style.transform = 'translateZ(0) scale(1)';
                    modal.classList.remove('hidden');
                    modal.classList.add('open');
                } else {
                    // Ocultar modal
                    modal.style.opacity = '0';
                    modal.style.visibility = 'hidden';
                    modal.style.transform = 'translateZ(0) scale(0.95)';
                    modal.classList.remove('open');
                    modal.classList.add('hidden');
                }
            });
        });

        // Cerrar modal al hacer clic fuera con animación
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                requestAnimationFrame(() => {
                    modal.style.opacity = '0';
                    modal.style.visibility = 'hidden';
                    modal.style.transform = 'translateZ(0) scale(0.95)';
                    modal.classList.remove('open');
                    modal.classList.add('hidden');
                });
            }
        });
    }
});

// Función para optimizar elementos con animaciones JavaScript puras
function setupVisibilityOptimization() {
    if ('IntersectionObserver' in window) {
        const gameObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const game = entry.target;
                const img = game.querySelector('img');
                
                if (entry.isIntersecting) {
                    // Elemento visible - aplicar estilos de entrada
                    game.style.opacity = '1';
                    game.style.transform = 'translateY(0) scale(1)';
                    game.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    
                    if (img) {
                        img.style.transform = 'translateY(0) scale(1)';
                        img.style.transition = 'transform 0.3s ease';
                    }
                } else {
                    // Elemento fuera de vista - aplicar estilos de salida
                    game.style.opacity = '0.7';
                    game.style.transform = 'translateY(20px) scale(0.95)';
                    game.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    
                    if (img) {
                        img.style.transform = 'translateY(20px) scale(0.95)';
                        img.style.transition = 'transform 0.3s ease';
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '20px'
        });

        // Observar todos los juegos existentes y aplicar estilos iniciales
        document.querySelectorAll('.game').forEach(game => {
            // Estilos iniciales con JavaScript
            game.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            game.style.willChange = 'transform, opacity';
            
            gameObserver.observe(game);
        });

        return gameObserver;
    }
}

// Inicializar optimizaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Guardar el observer globalmente para usar en nuevos elementos
    window.gameObserver = setupVisibilityOptimization();
    
    // Aplicar optimizaciones a elementos existentes
    document.querySelectorAll('.game').forEach(game => {
        applyGameOptimizations(game);
    });
    
    // Optimizar imagen principal si existe
    const mainImage = document.querySelector("#main-image img");
    if (mainImage) {
        mainImage.style.transition = 'opacity 0.3s ease';
        mainImage.style.willChange = 'opacity';
    }
    
    // Pre-cargar imágenes críticas si se proporciona la lista
    // Ejemplo: preloadCriticalImages(['imagen1.jpg', 'imagen2.jpg']);
    
    console.log('✅ Optimizaciones de renderizado aplicadas exitosamente');
});
