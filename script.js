// Electric Bloom — Step 2: floating navigation and theme foundation
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.getElementById("navbar");

function closeNavMenu() {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
}
navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    navToggle.classList.toggle("active", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});
navLinks.forEach(link => link.addEventListener("click", closeNavMenu));
document.addEventListener("keydown", event => { if (event.key === "Escape") closeNavMenu(); });
document.addEventListener("click", event => { if (!event.target.closest(".navbar")) closeNavMenu(); });
window.addEventListener("resize", () => { if (window.innerWidth > 850) closeNavMenu(); });

const sections = document.querySelectorAll("section[id]");
function updateNavigation() {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    let currentSection = "";
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 160) currentSection = section.id;
    });
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5;
    if (atBottom && sections.length) currentSection = sections[sections.length - 1].id;
    navLinks.forEach(link => {
        const active = link.getAttribute("href") === `#${currentSection}`;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
    });
}
window.addEventListener("scroll", updateNavigation, { passive: true });
updateNavigation();

const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;
try { if (localStorage.getItem("theme") === "dark") root.classList.add("dark"); } catch (_) {}
function updateThemeButton() {
    const isDark = root.classList.contains("dark");
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}
updateThemeButton();
themeToggle.addEventListener("click", () => {
    root.classList.toggle("dark");
    try { localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light"); } catch (_) {}
    updateThemeButton();
});

// Existing sections: scroll reveals (other sections will be redesigned in later steps).
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            if (el.parentElement?.matches(".projects-grid, .skills-grid")) {
                el.style.animationDelay = `${Array.from(el.parentElement.children).indexOf(el) * 0.1}s`;
            }
            el.classList.add("fade-in-up");
            observer.unobserve(el);
        });
    }, { threshold: 0.1 });
    document.querySelectorAll(".section-title, .project-card, .skill-category, .contact-card").forEach(el => observer.observe(el));
}
const footerYear = document.getElementById("footer-year");
if (footerYear) footerYear.textContent = new Date().getFullYear();


/* ============================================
   FOOTER — BACK TO TOP
   ============================================ */

const footerBackToTop = document.querySelector(".footer-top-link");

if (footerBackToTop) {
    footerBackToTop.addEventListener("click", (event) => {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
