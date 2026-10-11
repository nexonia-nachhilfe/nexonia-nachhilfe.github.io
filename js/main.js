document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. LOGO-KLICK LOGIK (Smooth Scroll auf Startseite)
    // ==========================================
    const brandLinks = document.querySelectorAll(".brand");
    
    brandLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const currentPath = window.location.pathname;
            const isHome = currentPath.endsWith("index.html") || currentPath.endsWith("/") || currentPath === "";

            if (isHome) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                if (window.location.hash) {
                    history.pushState("", document.title, window.location.pathname + window.location.search);
                }
            }
        });
    });

    // ==========================================
    // 2. ZURÜCK NACH OBEN BUTTON IM FOOTER
    // ==========================================
    const backToTopLinks = document.querySelectorAll(".footer-top-link");

    backToTopLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            // URL-Hash im Browser bereinigen
            if (window.location.hash) {
                history.pushState("", document.title, window.location.pathname + window.location.search);
            }
        });
    });

    // ==========================================
    // 3. FAQ AKKORDEON
    // ==========================================
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const questionBtn = item.querySelector(".faq-question");
        
        questionBtn.addEventListener("click", () => {
            const isOpen = item.classList.contains("is-open");

            if (!isOpen) {
                item.classList.add("is-open");
                questionBtn.setAttribute("aria-expanded", "true");
            } else {
                item.classList.remove("is-open");
                questionBtn.setAttribute("aria-expanded", "false");
            }
        });
    });

    // ==========================================
    // 4. MOBILE NAVIGATION TOGGLE
    // ==========================================
    const navToggle = document.querySelector(".nav-toggle");
    const primaryNav = document.querySelector(".primary-navigation");

    if (navToggle && primaryNav) {
        navToggle.addEventListener("click", () => {
            const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
            navToggle.setAttribute("aria-expanded", !isExpanded);
            
            if (!isExpanded) {
                primaryNav.style.display = "flex";
                primaryNav.style.flexDirection = "column";
                primaryNav.style.position = "absolute";
                primaryNav.style.top = "86px";
                primaryNav.style.left = "0";
                primaryNav.style.width = "100%";
                primaryNav.style.background = "var(--color-white)";
                primaryNav.style.padding = "24px";
                primaryNav.style.borderBottom = "1px solid var(--color-line)";
                primaryNav.style.boxShadow = "var(--shadow-card)";
            } else {
                primaryNav.style.display = "";
                primaryNav.style.position = "";
                primaryNav.style.top = "";
                primaryNav.style.left = "";
                primaryNav.style.width = "";
                primaryNav.style.background = "";
                primaryNav.style.padding = "";
                primaryNav.style.borderBottom = "";
                primaryNav.style.boxShadow = "";
            }
        });
    }

    // ==========================================
    // 5. AUTOMATISCHES JAHR IM FOOTER
    // ==========================================
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});