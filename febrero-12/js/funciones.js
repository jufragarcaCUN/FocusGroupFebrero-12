// ======================================================
// FUNCIONES GENERALES DEL DASHBOARD
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Funciones cargadas correctamente");

    inicializarTabs();
    inicializarBotonRegresar();
    inicializarAccordion();

});


// ======================================================
// 1. NAVEGACIÓN ENTRE PESTAÑAS (TABS)
// ======================================================

function openTab(evt, tabId) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-pane");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    tablinks = document.getElementsByClassName("nav-btn");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    var tab = document.getElementById(tabId);

    if (tab) {
        tab.style.display = "block";
        tab.classList.add("active");
    }

    if (evt) {
        evt.currentTarget.classList.add("active");
    }
}


// ======================================================
// Inicializar primera pestaña automáticamente
// ======================================================

function inicializarTabs() {

    const primeraTab = document.querySelector(".tab-pane");

    if (primeraTab) {
        primeraTab.style.display = "block";
        primeraTab.classList.add("active");
    }

}


// ======================================================
// 2. BOTÓN REGRESAR AL INDEX
// ======================================================

function inicializarBotonRegresar() {

    const backBtn = document.getElementById("back-btn");

    if (!backBtn) {
        return;
    }

    backBtn.addEventListener("click", function () {

        console.log("Redirigiendo al index...");

        window.location.href = "index.html";

    });

}


// ======================================================
// 3. ACORDEÓN (Mostrar / ocultar contenido)
// ======================================================

function toggleAccordion() {

    const content = document.getElementById("accordion-content");
    const icon = document.getElementById("acc-icon");

    if (!content) {
        return;
    }

    if (content.style.display === "block") {

        content.style.display = "none";

        if (icon) {
            icon.innerText = "+";
        }

    } else {

        content.style.display = "block";

        if (icon) {
            icon.innerText = "-";
        }

    }

}


// ======================================================
// 4. SCROLL SUAVE (opcional)
// ======================================================

function scrollToSection(id) {

    const section = document.getElementById(id);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }

}


// ======================================================
// 5. DEBUG GENERAL (opcional)
// ======================================================

function debugElemento(id) {

    const el = document.getElementById(id);

    if (el) {
        console.log("Elemento encontrado:", el);
    } else {
        console.log("Elemento NO encontrado:", id);
    }

}