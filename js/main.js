document.addEventListener('DOMContentLoaded', () => {

    const empresas = {
        'cafeteria': {
            nombre: 'Cafetería T y R',
            logo: 'images/Logo2.jpg',
            colorPrincipal: '#D2691E',
            colorFondoSutil: '#faf3e0',
            coloresFondo: ['#8B4513', '#D2691E'],
            social: { wpp: '59170000001', fb: 'CafeteriaTyRElAlto', tk: 'cafeteria.tyr' },
            fotos: ['https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800', 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800'],
            mapaEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1912.4411136173078!2d-68.1636287950337!3d-16.51608628318817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf0160249857%3A0xe536d2673d57e3f8!2zQ2FmZXRlcw7DrWEgVCB5IFI!5e0!3m2!1ses!2sbo!4v1716301550993!5m2!1ses!2sbo" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            productos: {
                novedades: [
                    { nombre: 'Capuchino de Avellana', img: 'images/Prod_cafe1.jpg' },
                    { nombre: 'Muffin de Arándanos', img: 'images/Prod_cafe2.jpg' }
                ],
                ofertas: [
                    { nombre: 'Combo Desayuno -15%', img: 'images/Prod_cafe3.jpg' }
                ],
                general: [
                    { nombre: 'Espresso', img: 'images/Prod_cafe4.jpg' },
                    { nombre: 'Latte Machiato', img: 'images/Prod_cafe5.jpg' },
                    { nombre: 'Té de Hierbas', img: 'images/Prod_cafe6.jpg' }
                ]
            }
        },
        'licoreria': {
            nombre: 'Licorería Cris',
            logo: 'images/Logo3.jpg',
            colorPrincipal: '#8A2BE2',
            colorFondoSutil: '#f3e5f5',
            coloresFondo: ['#4B0082', '#8A2BE2'],
            social: { wpp: '59170000002', fb: 'LicoreriaCrisBo', tk: 'licoreria.cris' },
            fotos: ['https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?w=800', 'https://images.unsplash.com/photo-1569701881854-306b77e2d821?w=800'],
            mapaEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1912.4273292419405!2d-68.17646187503362!3d-16.51737148318723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf08b6555555%3A0x63351f8016555555!2sLicoreria%20Cris!5e0!3m2!1ses!2sbo!4v1716301825838!5m2!1ses!2sbo" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            productos: {
                novedades: [
                    { nombre: 'Vino Tinto Reserva', img: 'images/Prod_lic1.jpg' },
                    { nombre: 'Pack Cerveza Premium', img: 'images/Prod_lic2.jpg' }
                ],
                ofertas: [
                    { nombre: 'Promo Fernet + Coca', img: 'images/Prod_lic3.jpg' }
                ],
                general: [
                    { nombre: 'Vodka', img: 'images/Prod_lic4.jpg' },
                    { nombre: 'Singani Boliviano', img: 'images/Prod_lic5.jpg' },
                    { nombre: 'Ron Añejo', img: 'images/Prod_lic6.jpg' }
                ]
            }
        },
        'gema': {
            nombre: 'Gema Collection',
            logo: 'images/Logo4.png',
            colorPrincipal: '#008080',
            colorFondoSutil: '#e0f2f1',
            coloresFondo: ['#004d4d', '#008080'],
            social: { wpp: '59170000003', fb: 'GemaCollectionBol', tk: 'gemacollection.bo' },
            fotos: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800', 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800'],
            mapaEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1912.4497745778278!2d-68.1698242250337!3d-16.51528623318873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edfb63840e653%3A0x1d752f9b87f54b6c!2sGema%20Collection!5e0!3m2!1ses!2sbo!4v1716301890141!5m2!1ses!2sbo" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            productos: {
                novedades: [
                    { nombre: 'Collar de Perlas Gema', img: 'images/Prod_gema1.jpg' },
                    { nombre: 'Anillo Plata Ley 925', img: 'images/Prod_gema2.jpg' }
                ],
                ofertas: [
                    { nombre: 'Set de Aretes 3x2', img: 'images/Prod_gema3.jpg' }
                ],
                general: [
                    { nombre: 'Reloj de Mano', img: 'images/Prod_gema4.jpg' },
                    { nombre: 'Dijes Personalizados', img: 'images/Prod_gema5.jpg' }
                ]
            }
        }
    };

    const mainContent = document.getElementById('main-content');
    const blob1 = document.getElementById('blob-1');
    const blob2 = document.getElementById('blob-2');

    function actualizarEstilo(color, fondos) {
        document.documentElement.style.setProperty('--current-color', color);
        blob1.style.background = fondos[0];
        blob2.style.background = fondos[1];
    }

    // CORRECCIÓN DEL ERROR DE BUCLE: Se añade 'this.onerror=null' y un placeholder web seguro
    function renderCard(p) {
        return `
            <div class="col-12 col-md-4 col-lg-3 animate__animated animate__fadeInUp">
                <div class="product-card">
                    <img src="${p.img}" alt="${p.nombre}" onerror="this.onerror=null; this.src='https://placehold.co/400x300/e9ecef/6c757d?text=Falta+Foto'">
                    <h6 class="fw-bold text-center">${p.nombre}</h6>
                    <button class="btn btn-dynamic">Consultar</button>
                </div>
            </div>`;
    }

    function cargarTienda(id) {
        const info = empresas[id];
        actualizarEstilo(info.colorPrincipal, info.coloresFondo);

        mainContent.style.background = `radial-gradient(circle at center, ${info.colorFondoSutil} 0%, #fdfdfd 100%)`;

        mainContent.innerHTML = `
            <div class="animate__animated animate__fadeIn">
                <div class="text-center mb-5">
                    <h2 class="fw-black display-5 mb-3">${info.nombre}</h2>
                    <img src="${info.logo}" class="mb-4 tienda-logo" alt="${info.nombre}">
                    
                    <div class="social-header d-flex justify-content-center gap-4 mb-4">
                        <a href="https://wa.me/${info.social.wpp}" target="_blank" class="text-success"><i class="bi bi-whatsapp"></i></a>
                        <a href="https://facebook.com/${info.social.fb}" target="_blank" style="color: #1877F2;"><i class="bi bi-facebook"></i></a>
                        <a href="https://tiktok.com/@${info.social.tk}" target="_blank" class="text-dark"><i class="bi bi-tiktok"></i></a>
                    </div>

                    <div id="storeCarousel" class="carousel slide store-carousel shadow-lg mb-5 animate__animated animate__fadeInUp animate__delay-1s" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#storeCarousel" data-bs-slide-to="0" class="active"></button>
                            <button type="button" data-bs-target="#storeCarousel" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#storeCarousel" data-bs-slide-to="2"></button>
                        </div>
                        <div class="carousel-inner rounded-50">
                            <div class="carousel-item active">
                                <img src="${info.fotos[0]}" class="d-block w-100" alt="${info.nombre} Foto 1">
                            </div>
                            <div class="carousel-item">
                                ${info.mapaEmbed}
                                <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-75 rounded-pill px-3 py-1 w-auto mx-auto mb-3">
                                    <p class="mb-0 fw-bold"><i class="bi bi-geo-alt-fill me-1"></i> Nuestra Ubicación</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="${info.fotos[1]}" class="d-block w-100" alt="${info.nombre} Foto 2">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#storeCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#storeCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon"></span>
                        </button>
                    </div>

                </div>

                ${['novedades', 'ofertas', 'general'].map(catName => `
                    <section class="mb-5">
                        <h4 class="section-title-neon text-capitalize">${catName}</h4>
                        <div class="row g-4 d-flex align-items-stretch">${info.productos[catName].map(p => renderCard(p)).join('')}</div>
                    </section>
                `).join('')}
            </div>`;
    }

    function mostrarInicio() {
        actualizarEstilo('#0047FF', ['#0047FF', '#FF6B00']);
        mainContent.style.background = '#fdfdfd';
        
        mainContent.innerHTML = `
            <div class="text-center py-5 animate__animated animate__zoomIn">
                <h2 class="display-4 fw-black">PORTAL DE EMPRESAS</h2>
                <p class="lead">Selecciona una categoría para ver sus productos y contacto directo.</p>
                <img src="https://facebolsrl.net/imagen/institucion/4319Logo.png" class="mt-4 opacity-25" style="height: 60px;">
            </div>`;
    }

    const menu = document.getElementById('lista-empresas');
    Object.keys(empresas).forEach(id => {
        const li = document.createElement('li');
        li.innerHTML = `<a class="dropdown-item py-2 fw-bold" href="#" data-id="${id}">${empresas[id].nombre}</a>`;
        menu.appendChild(li);
    });

    menu.addEventListener('click', (e) => {
        if (e.target.dataset.id) {
            e.preventDefault();
            cargarTienda(e.target.dataset.id);
        }
    });

    document.getElementById('nav-inicio').addEventListener('click', (e) => { e.preventDefault(); mostrarInicio(); });
    document.getElementById('home-link').addEventListener('click', (e) => { e.preventDefault(); mostrarInicio(); });

    mostrarInicio();
});