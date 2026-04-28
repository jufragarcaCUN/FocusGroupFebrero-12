/**
 * ARCHIVO: graficos.js
 * Descripción: Inicialización centralizada de métricas de Auditoría CUN - Sede Sincelejo.
 * Paleta de colores: Escala de Verdes CUN.
 */

// 1. FUNCIÓN ÚNICA REUTILIZABLE CON MEJORAS VISUALES
function renderGrafica(idCanvas, labels, valores, tituloDataset = 'Puntuación (0-10)') {

    const ctx = document.getElementById(idCanvas);

    if (!ctx) {
        console.warn('Canvas no encontrado:', idCanvas);
        return;
    }

    // Tamaño real del canvas
    ctx.style.width = '1200px';
    ctx.style.height = '500px';

    new Chart(ctx, {
        type: 'bar',

        data: {
            labels: labels,

            datasets: [{
                label: tituloDataset,
                data: valores,

                backgroundColor: 'rgba(34, 197, 94, 0.7)',
                borderColor: 'rgba(21, 128, 61, 1)',
                borderWidth: 1,
                borderRadius: 6,

                // Mejora visual del ancho y separación
                barPercentage: 0.6,
                categoryPercentage: 0.8
            }]
        },

        options: {

            responsive: true,
            maintainAspectRatio: false,

            // Espacio extra para el eje X
            layout: {
                padding: {
                    bottom: 40
                }
            },

            plugins: {

                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 12,
                            weight: 'bold'
                        },
                        color: '#166534'
                    }
                },

                tooltip: {
                    callbacks: {
                        label: function(context) {

                            let label = context.dataset.label || '';

                            if (label) {
                                label += ': ';
                            }

                            label += Number(context.raw).toFixed(2);

                            return label;
                        }
                    }
                }

            },

            scales: {

                y: {
                    beginAtZero: true,
                    max: 10,

                    ticks: {
                        color: '#166534',
                        stepSize: 1
                    },

                    grid: {
                        color: 'rgba(22, 101, 52, 0.05)'
                    }
                },

                x: {

                    ticks: {

                        color: '#166534',

                        font: {
                            size: 12
                        },

                        maxRotation: 0,
                        minRotation: 0,
                        autoSkip: false,
                        padding: 10,

                        // Divide etiquetas largas en varias líneas
                        callback: function(value) {

                            const label =
                                this.getLabelForValue(value);

                            return label.split(' ');
                        }

                    },

                    grid: {
                        display: false
                    }

                }

            }

        }

    });

}



// 2. CONFIGURACIÓN CENTRALIZADA

const configGraficas = [

    // ACADÉMICO

    {
        id: 'Grafica_Calidad_Pensum',
        labels: [
            'Calidad del pensum',
            'Actualizacion del pensum'
        ],
        datos: [1, 2]
    },

    {
        id: 'Grafica_Docencia_Metodologia',
        labels: [
            'Docencia poca explicacion y asistencia',
            'Clases pesimas'
        ],
        datos: [2, 2]
    },

    {
        id: 'Grafica_Practicas_Profesionales',
        labels: [

            'Calificacion y nota de practicas',

            'Error en plataforma no aparece o no se registra',

            'Matricula oferta de practicas',

            'Asignacion de docente horario',

            'Problemas con sitio de practicas convenios',

            'Ajuste de fechas y registro',

            'Usuario contraseña incorrecto en SGP',

            'Convenio con empresa'

        ],

        datos: [
            10,
            8,
            5,
            4,
            4,
            3,
            2,
            1
        ]
    },



    // TECNOLÓGICO

    {
        id: 'Grafica_Tecnologico_Tickets',

        labels: [

            'Contraseña clave acceso',

            'Correo institucional',

            'CDigital biblioteca virtual',

            'SINU usuario y contraseña',

            'Acceso general a plataformas',

            'Bloqueo por documentos TYT'

        ],

        datos: [
            12,
            11,
            6,
            5,
            4,
            2
        ]
    },



    // SERVICIO

    {
        id: 'Grafica_CamiTicket',

        labels: [

            'ACADEMICA',

            'BIENESTAR Y PERMANENCIA',

            'CAMPUS CDIGITAL LMS',

            'CULTURA Y CALIDAD DE VIDA',

            'FINANCIERO',

            'GRADOS Y TITULACIONES',

            'PQRS',

            'PRACTICAS',

            'TECNOLOGIA'

        ],

        datos: [

            1.84,
            2.43,
            5.00,
            0.66,
            2.55,
            0.33,
            3.07,
            1.60,
            0.08

        ]
    },



    // BIENESTAR

    {
        id: 'Grafica_Bienestar_Institucional',

        labels: [

            'Becas deportivas y culturales',

            'Beneficios ofrecidos por bienestar',

            'Dificultades semestre en curso',

            'Acompañamientos academicos apoyo familiar',

            'Otros actualizacion datos remision saldo'

        ],

        datos: [
            7,
            8,
            5,
            2,
            3
        ]
    },



    // INFRAESTRUCTURA

    {
        id: 'Grafica_Comodidad_Servicios',

        labels: [
            'Climatizacion',
            'Cafeteria',
            'Enfermeria'
        ],

        datos: [
            3.0,
            2.5,
            2.0
        ]
    }

];



// 3. INICIALIZACIÓN

document.addEventListener('DOMContentLoaded', function () {

    console.log('Iniciando renderizado de auditoría...');

    configGraficas.forEach(grafica => {

        renderGrafica(
            grafica.id,
            grafica.labels,
            grafica.datos
        );

    });

});