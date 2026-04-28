/**
 * ARCHIVO: graficos.js
 * Descripción: Inicialización centralizada de métricas de Auditoría CUN - Sede Sincelejo.
 */

function renderGrafica(idCanvas, labels, valores, tituloDataset = 'Cantidad de tickets') {
    const ctx = document.getElementById(idCanvas);
    if (!ctx) return;

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
                borderRadius: 5,
                barPercentage: 0.7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { font: { size: 12, weight: 'bold' }, color: '#166534' }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) label += ': ';
                            label += Number(context.raw).toFixed(0);
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize: 10 },
                    grid: { color: 'rgba(22, 101, 52, 0.05)' }
                },
                x: {
                    ticks: { font: { size: 9 } },
                    grid: { display: false }
                }
            }
        }
    });
}

const configGraficas = [
    // 1. CALIDAD PENSUM
    {
        id: 'Grafica_Calidad_Pensum',
        labels: [
            'ASIGNATURA CON CRUCE',
            'ASIGNATURA NO DISPONIBLE EN LA OFERTA ACADÉMICA',
            'ASIGNATURA SIN CUPO',
            'CRUCE DE HORARIO ENTRE ASIGNATURAS',
            'HOMOLOGACIÓN POR CRÉDITOS CURSADOS',
            'INTERPERIODO',
            'NO APARECEN MATERIAS INSCRITAS',
            'NO HAY CUPO DISPONIBLE EN LA ASIGNATURA',
            'NO TENGO MATERIAS INSCRITAS',
            'RECONOCIMIENTO DE TÍTULO',
            'RECONOCIMIENTO DE TITULOS',
            'VERIFICACIÓN ACADÉMICA'
        ],
        datos: [4, 58, 6, 3, 2, 3, 46, 6, 1, 1, 9, 11]
    },
    // 2. DOCENCIA METODOLOGIA
    {
        id: 'Grafica_Docencia_Metodologia',
        labels: [
            'ACOMPAÑAMIENTO DOCENTE',
            'CAMBIO: MODALIDAD- PROGRAMA O SEDE',
            'DOCENTE'
        ],
        datos: [3, 18, 4]
    },
    // 3. PRACTICAS PROFESIONALES
    {
        id: 'Grafica_Practicas_Profesionales',
        labels: [
            '¿CÓMO PUEDO SOLICITAR UN CONVENIO?',
            'AYUDA PARA ENCONTRAR SITIO DE PRÁCTICAS',
            'CARTA DE PRESENTACIÓN PARA INICIAR PRÁCTICAS',
            'DESBLOQUEO DEL CONTRATO DE APRENDIZAJE',
            'ERROR AL REGISTRAR PRÁCTICA',
            'ERROR INFORMACIÓN OBSERVATORIO LABORAL',
            'INFORMACIÓN SOBRE TIPOS DE PRÁCTICAS',
            'PROBLEMAS CON EL SITIO DE PRÁCTICAS',
            'SISTEMA DE PRACTICAS'
        ],
        datos: [1, 2, 5, 2, 5, 1, 14, 8, 1]
    },
    // 4. TECNOLOGICO
    {
        id: 'Grafica_Tecnologico_Tickets',
        labels: [
            'ACCIONES MASIVAS MATRICULACIÓN-CREACIÓN DE EXCEPCIONES-AJUSTES DE PONDERADOS',
            'ACOMPAÑAMIENTO DE SOPORTE EQUIPOS DE COMPUTO',
            'ASIGNACIÓN DE EQUIPO',
            'ASIGNACIÓN DE PERIFÉRICOS',
            'ASIGNACIÓN DE ROLES O PERMISOS',
            'C-DIGITAL',
            'CONFIGURACIÓN DE SITIOS WEB',
            'Configuracion final en SINU y ORACLE de los periodos',
            'CORREO INSTITUCIONAL',
            'CREACION DE POLITICAS',
            'CREACION DE USUARIOS',
            'CUN 360',
            'DESBLOQUEAR USUARIO',
            'ERRORES DE LA INTERFAZ DE USUARIO REVISIÓN',
            'FALLA EN HARDWARE',
            'FALLAS CON EL INTERNET / WIFI',
            'FALLAS EN PLATAFORMA',
            'GOOGLE DRIVE',
            'HABILITACIÓN DEL CORREO',
            'INCONVENIENTES AL INGRESAR A LA APLICACION ?',
            'INCONVENIENTESEN ALGUN PROCESO DENTRO DE LA APLICACIÓN ?',
            'INFORMACION DE CURSO Y/O PLATAFORMA CUN DIGITAL',
            'INFORMACIÓN DE CURSO Y/O PLATAFORMA CUN DIGITAL',
            'LICENCIAS DE GRABACIONES',
            'MODIFICACIÓN EN LA APLIACACIÓN',
            'NOVEDADES CON USUARIO O CONTRASEÑA DEL SISTEMA',
            'PERMISOS REPORTE',
            'PERMISOS SITIO WEB',
            'PLATAFORMA',
            'PRESENTA INCONVENINETES EN ALGUN PROCESO EN EL MODULO GENERAL ?',
            'PROBLEMA AL CARGAR DOCUMENTOS AL SISTEMA',
            'REESTABLECER CONTRASEÑAS',
            'REPORTA FALLAS O ERRORES ALGUN SITIO WEB?',
            'REQUIERE PERMISOS SOBRE ALGUN SITIO WEB?',
            'REQUIERE UNA AUDITORIA SOBRE ALGUN PROCESO EN SINU ?',
            'RESTABLECIMIENTO DE CONTRASEÑAS',
            'SESIONES ZOOM',
            'SOLICITUD DE VPN'
        ],
        datos: [1, 1, 1, 1, 2, 7, 1, 1, 8, 5, 11, 4, 2, 4, 5, 5, 3, 2, 3, 22, 1, 2, 2, 11, 1, 14, 1, 2, 1, 1, 9, 4, 9, 1, 1, 2, 1, 2]
    },
    // 5. CAMITICKET
    {
        id: 'Grafica_CamiTicket',
        labels: [
            'ACTIVACION CTAYUDA',
            'ACTIVACIÓN DE CT AYUDA',
            'ACTIVACIÓN DEL MÓDULO DE INGLÉS',
            'ACTIVIDADES ACADEMICAS',
            'CAMI TICKET',
            'CERTIFICADO',
            'CERTIFICADO DE ESCUELA DE IDIOMAS',
            'CERTIFICADO DE ESTUDIOS',
            'CERTIFICADOS',
            'CERTIFICADOS ACADÉMICOS',
            'CESANTÍAS',
            'CIFRAS DIFERENTES A LO ESPERADO',
            'CONTENIDO',
            'CONTENIDO TEMATICO',
            'CONTENIDO TEMÁTICO',
            'CORRECCION DE DATOS INSCRITOS',
            'CORRECCION DE NOTAS',
            'CORRECCIÓN DE NOTAS',
            'CORRECCIÓN O AJUSTE DE NOTA',
            'CORREGIR INFORMACIÓN PERSONAL YA REGISTRADA',
            'CRÉDITOS ADICIONALES',
            'CRUCE DE SALDO A FAVOR',
            'CRUCE DE SALDO O SALDO A FAVOR',
            'CURSO SIN CONTENIDO O CONTENIDOS DUPLICADOS',
            'DERECHOS DE GRADO',
            'DESCUENTO POR CONVENIO',
            'DESCUENTO POR PRONTO PAGO',
            'DEUDA ACTUAL RELACIONADA CON CT AYUDA',
            'DUPLICADO DE ACTA O DIPLOMA DE GRADO',
            'EL PAGO NO SE HA REGISTRADO',
            'ENTIDADES EXTERNAS',
            'ENTREGA DE GRABACIONES Y LISTA DE ASISTENTES CONFERENCIA',
            'EXAMEN DE SUFICIENCIA INGLÉS',
            'FINANCIACION: CUN VIVE',
            'GENERACIÓN DE SALDO A FAVOR',
            'GIRO ADICIONAL',
            'HOMOLOGAR OPCIÓN DE GRADO CON DIPLOMADO',
            'INFORMACION',
            'INFORMACIÓN DEL CURSO Y OFERTAS DISPONIBLES',
            'INFORMACIÓN MODELO 335',
            'INFORMACIÓN SOBRE CT AYUDA',
            'INFORMACIÓN SOBRE INSCRIPCIÓN',
            'INFORMACIÓN SOLICITUD DE GRADO',
            'INSUMOS',
            'LEGALIZACIÓN DE CRÉDITO',
            'MATRICULA',
            'MATRÍCULA',
            'MATRICULA CERRADA',
            'MATRICULA SIN PAGO',
            'N/A',
            'NO REGISTRA PAGO',
            'NO SE REGISTRA EL PAGO',
            'PAGAR CUOTA DE CT AYUDA',
            'PAGO FRACCIONADO DE DEUDA',
            'PAGO MODELO 335',
            'POR CRÉDITOS ACADÉMICOS',
            'PROCESO',
            'PROGRAMA',
            'QUIERO CURSAR UN DIPLOMADO',
            'RADICACION Y APLICACION DE DESCUENTOS',
            'RECIBO DE PAGO A TERCERO',
            'REINTEGRO',
            'REINTEGRO ACADÉMICO',
            'RENOVACION',
            'RENOVACIÓN CRÉDITO ICETEX',
            'RENOVACIÓN DE CRÉDITO',
            'REPORTE',
            'REVISIÓN CON SEGUNDO CALIFICADOR',
            'SIN REGISTRO DE NOTA',
            'SOLICITO DESCUENTO POR CONVENIO',
            'SOLICITO RECIBO MATRICULA',
            'SOLICITUD CODIGO PRESUPUESTAL',
            'SOLICITUD DE GRADO',
            'SOLICITUD DE INFORMACIÓN',
            'SOLICITUD DE RECIBO Y OFERTAS VIGENTES',
            'SOLICITUD GRADO',
            'SOLICITUDES SOBRE ACTIVIDADES ACADÉMICAS',
            'TENGO DUDAS CON DEUDA EXISTENTE',
            'TEST DE CLASIFICACIÓN',
            'TIENE DUDAS SOBRE PROCESOS EN MODULOS ?',
            'USO DE SALDO A FAVOR',
            'VALIDACION AVAL DE GRADO',
            'VALIDAR AVAL DE GRADO',
            'VERIFICACIÓN /CREACIÓN DEUDA',
            'VERIFICACION DE PRUEBA PRESENTADA',
            'VERIFICACIÓN DE SALDO PENDIENTE',
            'VERIFICACIÓN DE TÍTULO'
        ],
        datos: [3, 4, 1, 3, 3, 1, 1, 1, 45, 5, 5, 1, 1, 5, 1, 2, 1, 1, 24, 4, 3, 2, 6, 1, 2, 17, 3, 6, 6, 35, 1, 1, 2, 1, 14, 2, 4, 3, 29, 27, 14, 25, 21, 4, 1, 2, 56, 1, 1, 2, 3, 3, 1, 2, 8, 7, 2, 1, 2, 2, 4, 85, 5, 2, 1, 2, 1, 16, 2, 1, 3, 61, 2, 1, 2, 3, 79, 1, 5, 1, 7, 1, 5, 2, 1, 15, 5]
    },
    // 6. BIENESTAR INSTITUCIONAL
    {
        id: 'Grafica_Bienestar_Institucional',
        labels: [
            'APLICACIÓN DE APOYO ECONÓMICO DE ENTIDAD PÚBLICA',
            'APLICACIÓN DE APOYO ECONOMICO OTORGADO POR EMPRESA',
            'BENEFICIOS OFRECIDOS POR BIENESTAR',
            'CONECTIVIDAD Y BIENESTAR',
            'DIFICULTADES SEMESTRE EN CURSO',
            'PRESENTA INCONVENINETES EN ALGUN PROCESO EN EL MODULO DE BENEFICIOS ?',
            'PRESENTA INCONVENINETES EN ALGUN PROCESO EN EL MODULO DE BIENESTAR DE PERSONAL ?',
            'PRESENTA INCONVENINETES EN ALGUN PROCESO EN EL MODULO DE FORMACION Y DESARROLLO ?',
            'SESIÓN DE APOYO - REFUERZO CAPACITACIÓN'
        ],
        datos: [2, 2, 5, 4, 4, 1, 1, 2, 1]
    },
    // 7. COMODIDAD SERVICIOS
    {
        id: 'Grafica_Comodidad_Servicios',
        labels: [
            'ATENCIÓN EN SEDE',
            'CLIMATIZACIÓN',
            'CAFETERÍA'
        ],
        datos: [0, 0, 0]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    console.log('Iniciando renderizado de auditoría...');
    configGraficas.forEach(grafica => {
        if (grafica.datos.some(v => v > 0)) {
            renderGrafica(grafica.id, grafica.labels, grafica.datos);
        }
    });
});