/**
 * ARCHIVO: graficos.js
 */

/**
 * Divide cada label en palabras para que haya
 * UNA PALABRA POR LÍNEA en el eje X
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

            // CLAVE: convierte cada frase en múltiples líneas
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
                    position: 'top',

                    labels: {
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    }
                }

            },

            scales: {

                y: {
                    beginAtZero: true,

                    ticks: {
                        stepSize: 20,
                        font: {
                            size: 11
                        }
                    }
                },

                x: {

                    ticks: {

                        font: {
                            size: 11,
                            weight: 'normal'
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

    {
        id: 'Grafica_Calidad_Pensum',
        labels: [
            'ACADEMICO',
            'HOMOLOGACIÓN POR CRÉDITOS CURSADOS'
        ],
        datos: [16, 6]
    },

    {
        id: 'Grafica_Docencia_Metodologia',
        labels: [
            'DOCENTE',
            'ACOMPAÑAMIENTO DOCENTE',
            'CAMBIO: MODALIDAD- PROGRAMA O SEDE'
        ],
        datos: [45, 7, 42]
    },

    {
        id: 'Grafica_Practicas_Profesionales',
        labels: [
            'CORRECCIÓN O AJUSTE DE NOTA',
            'ERROR AL REGISTRAR PRÁCTICA',
            'PROBLEMAS CON EL SITIO DE PRÁCTICAS',
            'AYUDA PARA ENCONTRAR SITIO DE PRÁCTICAS',
            'CARTA DE PRESENTACIÓN PARA INICIAR PRÁCTICAS'
        ],
        datos: [22, 9, 14, 9, 3]
    },

    {
        id: 'Grafica_Tecnologico_Tickets',
        labels: [
            'C-DIGITAL',
            'CORREO INSTITUCIONAL',
            'PLATAFORMA',
            'ACCESO A LA PLATAFORMA',
            'NOVEDADES CON USUARIO O CONTRASEÑA DEL SISTEMA',
            'SINU'
        ],
        datos: [18, 14, 29, 3, 17, 3]
    },

    {
        id: 'Grafica_CamiTicket',
        labels: [
            'SOLICITUDES SOBRE ACTIVIDADES ACADÉMICAS',
            'MATRÍCULA',
            'MATRICULA',
            'CERTIFICADOS',
            'REINTEGRO',
            'SOLICITUD CODIGO PRESUPUESTAL',
            'CAMI TICKET',
            'INFORMACIÓN DEL CURSO Y OFERTAS DISPONIBLES'
        ],
        datos: [109, 82, 18, 99, 116, 58, 12, 34]
    },

    {
        id: 'Grafica_Bienestar_Institucional',
        labels: [
            'DIFICULTADES SEMESTRE EN CURSO',
            'BENEFICIOS OFRECIDOS POR BIENESTAR',
            'CONECTIVIDAD Y BIENESTAR',
            'APLICACIÓN DE APOYO ECONÓMICO DE EMPRESA PRIVADA',
            'NECESITO ACOMPAÑAMIENTO DE BIENESTAR'
        ],
        datos: [13, 9, 8, 4, 3]
    },

    {
        id: 'Grafica_Comodidad_Servicios',
        labels: [
            'Enfermería'
        ],
        datos: [2]
    }

];

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