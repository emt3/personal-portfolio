// ============================================================
// SCRIPT.JS - how your website BEHAVES
//
// This file adds interactivity to your page:
//   1. Phone menu (open/close)
//   2. Navbar shadow when you scroll
//   3. Cards slide in as you scroll to them
//   4. Menu highlights the section you're looking at
//   5. Button click ripple
//   6. Hero parallax (name moves slower than the page)
//   7. Footer year
//   8. Mouse sparkle trail
//   9. Background dots follow the mouse
//
// Built live in the workshop (at the bottom of this file):
//  10. Light/dark mode button
//  11. Back-to-top button
//
// ============================================================
// HOW JAVASCRIPT WORKS
//
// HTML is what's on the page. CSS is how it looks.
// JavaScript is what makes it DO things.
//
// JavaScript lets your page react to what visitors do, like
// clicking a button, scrolling down, or moving the mouse.
//
// It works in three parts:
//
//   1. Find something on the page
//      (like a button, a card, or the navbar)
//
//   2. Listen for something to happen to it
//      (like a click or a scroll)
//
//   3. Run some code when it happens
//      (like opening the menu or switching to light mode)
//
// Usually, that code just adds or removes a class on an element.
// style.css already has styles waiting for that class, so the
// moment the class is added, the page changes.
// ============================================================


// ============================================
// 1. PHONE MENU
// On small screens, tapping the three-line button opens the menu.
// ============================================
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")
const navLinks = document.querySelectorAll(".nav-link")

// Tap the button: open the menu if it's closed, close it if it's open
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})

// Tap a link: close the menu
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})


// ============================================
// 2. NAVBAR SHADOW ON SCROLL
// Once you scroll down a little, the navbar gets a shadow.
// ============================================
const navbar = document.getElementById("navbar")

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})


// ============================================
// 3. SLIDE-IN ON SCROLL
// Cards and section titles slide up when they come into view.
// An "IntersectionObserver" watches elements and tells us
// when they appear on the screen.
// ============================================
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const element = entry.target

      // Cards in a grid slide in one after another instead of all at once
      if (element.parentElement.matches(".projects-grid, .skills-grid")) {
        const position = Array.from(element.parentElement.children).indexOf(element)
        element.style.animationDelay = `${position * 0.1}s`
      }

      element.classList.add("fade-in-up") // the animation itself is in style.css
      scrollObserver.unobserve(element) // only animate once
    }
  })
}, { threshold: 0.1 })

document
  .querySelectorAll(".section-title, .project-card, .skill-category, .contact-card")
  .forEach((element) => scrollObserver.observe(element))


// ============================================
// 4. HIGHLIGHT THE CURRENT SECTION IN THE MENU
// As you scroll, the menu link for the section on screen lights up.
// ============================================
const sections = document.querySelectorAll("section[id]")

function highlightMenu() {
  let currentSection = ""

  // Find the last section whose top we've scrolled past
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 150) {
      currentSection = section.id
    }
  })

  // At the very bottom of the page, always highlight the last section
  const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 5
  if (atBottom) {
    currentSection = sections[sections.length - 1].id
  }

  // Turn "active" on for the matching link and off for all the others
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + currentSection)
  })
}

window.addEventListener("scroll", highlightMenu)
highlightMenu() // run once when the page first loads


// ============================================
// 5. BUTTON CLICK RIPPLE
// Clicking a button makes a circle spread out from where you clicked.
// ============================================
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    const ripple = document.createElement("span")
    ripple.classList.add("ripple") // styled in style.css

    // Place it where the mouse clicked, relative to the button
    const rect = button.getBoundingClientRect()
    ripple.style.left = e.clientX - rect.left + "px"
    ripple.style.top = e.clientY - rect.top + "px"

    button.appendChild(ripple)
    setTimeout(() => ripple.remove(), 600) // clean up after the animation
  })
})


// ============================================
// 6. HERO PARALLAX
// As you scroll, your name moves down slightly slower than the page,
// which creates a feeling of depth.
// ============================================
const heroContainer = document.querySelector(".hero-container")

window.addEventListener("scroll", () => {
  if (window.scrollY < window.innerHeight) {
    heroContainer.style.transform = `translateY(${window.scrollY * 0.1}px)`
  }
})


// ============================================
// 7. FOOTER YEAR
// Fills in the current year so you never have to update it.
// ============================================
document.getElementById("footer-year").textContent = new Date().getFullYear()


// ============================================
// 8. MOUSE SPARKLE TRAIL
// Every time the mouse moves, create a small dot at the mouse,
// let the CSS animation make it fall and fade, then delete it.
// ============================================
document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("div")
  sparkle.className = "sparkle" // styled in style.css
  sparkle.style.left = e.clientX + "px"
  sparkle.style.top = e.clientY + "px"
  sparkle.style.background = "var(--accent-primary)" // matches your accent color

  document.body.appendChild(sparkle)
  setTimeout(() => sparkle.remove(), 800)
})


// ============================================
// 9. BACKGROUND DOTS FOLLOW THE MOUSE
// Saves the mouse position as CSS variables (--x and --y).
// style.css uses them to show the dot grid around the mouse.
// ============================================
document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", e.clientX + "px")
  document.body.style.setProperty("--y", e.clientY + "px")
})


// ============================================================
// ============================================================
//
//   LIVE CODING
//   Everything below this line, we'll write together
//
// ============================================================
// ============================================================


// ============================================
// 10. LIGHT / DARK MODE
// Clicking the sun/moon button switches the whole site
// between dark mode and light mode.
//
// Already set up for you:
//   - style.css:  the light colors, which turn on when the page
//                 has the class "light"
//
// We'll also add to index.html:
//   - the button, with id="theme-toggle"
//
// What we need to write:
//   1. Find the button
//   2. Listen for a click on it
//   3. When clicked, add or remove the "light" class on the page
//   4. Bonus: remember the choice so it stays after a refresh
// ============================================

//  ✏️ Write the light/dark mode code here
const themeToggle = document.getElementById("theme-toggle")
if(localStorage.getItem("theme") === "light"){
  document.documentElement.classList.add("light")
}

themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("light")
  const isLight = document.documentElement.classList.contains("light")
  localStorage.setItem("theme", isLight ? "light" : "dark")
})


// ============================================
// 11. BACK-TO-TOP BUTTON
// A round arrow button appears in the corner once you scroll down.
// Clicking it glides you back to the top of the page.
//
// Already set up for you:
//   - style.css:  the button starts hidden, and fades in when it
//                 has the class "show"
//
// We'll also add to index.html:
//   - the button, with id="back-to-top"
//
// What we need to write:
//   1. Find the button
//   2. Listen for scrolling: once we're far enough down, add "show".
//      Back near the top, remove it.
//   3. Listen for a click on the button: scroll back to the top
// ============================================

// ✏️ Write the back-to-top code here

const backToTop = document.getElementById("back-to-top")
window.addEventListener("scroll", () => {
  if(window.scrollY > 400){
    backToTop.classList.add("show")
  } else{
    backToTop.classList.remove("show")
  }
})

backToTop.addEventListener("click", () => {
  window.scrollTo({top: 0, behavour: "smooth"})
})