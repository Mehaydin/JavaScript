

import { createNavbar } from './Home/navbar.js';
import { createMainContent } from './Home/mainContent.js';
import { createFooter } from './Home/footer.js';
import { showStudentsPage } from './Student/students.js';
import { showClassesPage } from './Class/classes.js';
import { showTeachersPage } from './Teacher/teachers.js';

document.addEventListener('DOMContentLoaded', function() {
    const body = document.getElementById("app");

    // Navbar, main content ve footer'ı oluştur
    const navbar = document.createElement('div');
    navbar.id = 'navbar';
    body.appendChild(navbar);
    createNavbar();

    const mainContent = document.createElement('div');
    mainContent.id = 'main-content';
    body.appendChild(mainContent);
    createMainContent();

    const footer = document.createElement('div');
    footer.id = 'footer';
    body.appendChild(footer);
    createFooter();

});






