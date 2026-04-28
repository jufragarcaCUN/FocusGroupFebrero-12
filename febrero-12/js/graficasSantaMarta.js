/**
 * ARCHIVO: graficos.js
 * VERSION LIMPIA - SOLO CATEGORIAS IMPORTANTES
 */

function dividirLabelsEnLineas(labels) {
    return labels.map(label => {
        if (typeof label === 'string') {
            return label.split(' ');
        }
        return label;
    });
}

function renderGrafica(idCanvas, labels, valores, tituloDataset = 'Cantidad de tickets') {

    const ctx = document.getElementById(idCanvas);

    if (!ctx) {
        console.warn("No se encontró el canvas:", idCanvas);
        return;
    }

    new Chart(ctx, {

        type: 'bar',

        data: {
            labels: dividirLabelsEnLineas(labels),

            datasets: [{
                label: tituloDataset,
                data: valores,

                backgroundColor: 'rgba(34, 197, 94, 0.7)',
                borderColor: 'rgba(21, 128, 61, 1)',
                borderWidth: 1,
                borderRadius: 6,

                barPercentage: 0.7,
                categoryPercentage: 0.8
            }]
        },

        options: {

            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: {
                    position: 'top'
                }
            },

            scales: {

                y: {
                    beginAtZero: true,

                    ticks: {
                        stepSize: 20
                    }
                },

                x: {
                    ticks: {
                        font: {
                            size: 11
                        },
                        maxRotation: 0,
                        minRotation: 0,
                        autoSkip: false,
                        padding: 4
                    },

                    grid: {
                        display: false
                    }
                }

            }

        }

    });

}

const configGraficas = [

    // ==================== CALIDAD PENSUM ====================

    {
        id: 'Grafica_Calidad_Pensum',

        labels: [
            'ASIGNATURA NO DISPONIBLE EN LA OFERTA ACADÉMICA',
            'NO APARECEN MATERIAS INSCRITAS',
            'RECONOCIMIENTO DE TITULOS',
            'ASIGNATURA SIN CUPO',
            'VERIFICACIÓN ACADÉMICA',
            'ASIGNATURA SIN OFERTA'
        ],

        datos: [
            133,
            70,
            53,
            24,
            24,
            21
        ]
    },

    // ==================== DOCENCIA ====================

    {
        id: 'Grafica_Docencia_Metodologia',

        labels: [
            'DOCENTE',
            'CAMBIO MODALIDAD PROGRAMA O SEDE',
            'ACOMPAÑAMIENTO DOCENTE'
        ],

        datos: [
            21,
            21,
            10
        ]
    },

    // ==================== PRACTICAS ====================

    {
        id: 'Grafica_Practicas_Profesionales',

        labels: [
            'ERROR AL REGISTRAR PRÁCTICA',
            'AYUDA PARA ENCONTRAR SITIO DE PRÁCTICAS',
            'INFORMACIÓN SOBRE TIPOS DE PRÁCTICAS',
            'PROBLEMAS CON EL SITIO DE PRÁCTICAS'
        ],

        datos: [
            17,
            11,
            11,
            10
        ]
    },

    // ==================== TECNOLOGICO ====================

    {
        id: 'Grafica_Tecnologico_Tickets',

        labels: [
            'NOVEDADES CON USUARIO O CONTRASEÑA DEL SISTEMA',
            'CORREO INSTITUCIONAL',
            'INCONVENIENTES AL INGRESAR A LA APLICACION',
            'INFORMACION DE CURSO O PLATAFORMA CUN DIGITAL',
            'NO APARECE MI NOTA EN SINU'
        ],

        datos: [
            56,
            21,
            11,
            16,
            13
        ]
    },

    // ==================== CAMITICKET ====================

    {
        id: 'Grafica_CamiTicket',

        labels: [
            'CERTIFICADOS',
            'MATRICULA',
            'SOLICITUD DE GRADO',
            'VALIDACION AVAL DE GRADO',
            'NO REGISTRA PAGO',
            'RENOVACION CREDITO ICETEX'
        ],

        datos: [
            127,
            94,
            89,
            86,
            67,
            65
        ]
    },

    // ==================== BIENESTAR ====================

    {
        id: 'Grafica_Bienestar_Institucional',

        labels: [
            'DIFICULTADES SEMESTRE EN CURSO',
            'BENEFICIOS OFRECIDOS POR BIENESTAR',
            'NECESITO ACOMPAÑAMIENTO DE BIENESTAR'
        ],

        datos: [
            8,
            6,
            4
        ]
    }

];

document.addEventListener('DOMContentLoaded', function () {

    console.log('Renderizando graficas importantes...');

    configGraficas.forEach(grafica => {
        renderGrafica(
            grafica.id,
            grafica.labels,
            grafica.datos
        );
    });

});