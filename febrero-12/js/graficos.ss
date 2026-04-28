/* graficas.css - Estilos para las gráficas de quejas contra docentes */

.graficos-section {
    padding: 2rem;
    background: var(--bg-light, #f1f5f9);
}

.graficos-section h2 {
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 2rem;
    color: var(--cun-gray-dark, #1e293b);
}

.graficos-card {
    background: var(--white, #ffffff);
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    height: 100%;
}

.graficos-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.graficos-card-header {
    background: var(--cun-gray-dark, #1e293b);
    color: var(--white, #ffffff);
    padding: 1rem 1.5rem;
    font-weight: 700;
    font-size: 1.1rem;
    border-bottom: 3px solid var(--cun-green, #22c55e);
}

.graficos-card-body {
    padding: 1.5rem;
}

.graficos-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.graficos-full-width {
    grid-column: 1 / -1;
}

/* Tooltips personalizados (opcional) */
canvas {
    max-height: 320px;
    width: 100%;
}

/* Responsive */
@media (max-width: 768px) {
    .graficos-section {
        padding: 1rem;
    }
    
    .graficos-container {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .graficos-card-header {
        padding: 0.75rem 1rem;
        font-size: 0.95rem;
    }
    
    .graficos-card-body {
        padding: 1rem;
    }
}