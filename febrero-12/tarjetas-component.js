class TarjetaCompensar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                .tarjeta-interactiva {
                    transition: all 0.3s ease-in-out !important;
                    cursor: pointer;
                    border: 1px solid #e2e8f0 !important;
                }
                .tarjeta-interactiva:hover {
                    transform: translateY(-10px) !important;
                    box-shadow: 0 15px 30px rgba(0, 219, 123, 0.15) !important;
                    border-color: var(--cun-green) !important;
                }
                .btn-cun {
                    background-color: var(--cun-green) !important;
                    border: none !important;
                    color: var(--sidebar-bg) !important;
                    transition: 0.3s !important;
                }
                .btn-cun:hover {
                    background-color: var(--cun-green-dark) !important;
                    transform: scale(1.05);
                }
            </style>
            <div class="container-fluid my-4">
                <div class="row g-4">
                    <div class="col-6">${this.getTemplate('prevencion', 'Prevención Integral', 'bi-shield-check')}</div>
                    <div class="col-6">${this.getTemplate('salario', 'Salario Emocional', 'bi-heart-fill')}</div>
                    <div class="col-6">${this.getTemplate('prevencion', 'Salud Laboral', 'bi-capsule-pill')}</div>
                    <div class="col-6">${this.getTemplate('salario', 'Beneficios CUN', 'bi-star-fill')}</div>
                </div>
            </div>
        `;
    }

    getTemplate(tipo, titulo, icono) {
        return `
            <div class="card h-100 tarjeta-interactiva shadow-sm">
                <div class="card-body p-4 text-center">
                    <div class="mb-3">
                        <i class="bi ${icono}" style="font-size: 2.5rem; color: var(--cun-green);"></i>
                    </div>
                    <h5 class="fw-bold mb-2" style="color: var(--cun-gray-dark); font-size: 1.2rem;">${titulo}</h5>
                    <p class="text-muted mb-4" style="font-size: 0.9rem; line-height: 1.4;">
                        Optimiza tu bienestar con las soluciones que tenemos para nuestra comunidad.
                    </p>
                    <button class="btn btn-cun w-100 rounded-pill fw-bold py-2">
                        Ver detalles
                    </button>
                </div>
            </div>
        `;
    }
}
customElements.define('tarjeta-compensar', TarjetaCompensar);