

import { showHomePage } from './Home/home.js';

function createNavbar() {
    const navbar = document.getElementById('navbar');

    navbar.innerHTML = `
    <div class=" ">
    <nav class="navbar container navbar-expand-lg bg-body-tertiary" id="navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">LMS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" id="home" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="classes" href="#">Classes</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link " id="teachers" href="#">Teachers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " id="students" href="#">Students</a>
                    </li>
                </ul>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>
        </div>
    </nav>
</div>
    `;

     // Navbar üzerindeki bağlantılar, events
     document.getElementById('home').addEventListener('click', function() {
        showHomePage();
    });

    document.getElementById('students').addEventListener('click', function() {
        showStudentsPage();
    });

    document.getElementById('classes').addEventListener('click', function() {
        showClassesPage();
    });

    document.getElementById('teachers').addEventListener('click', function() {
        showTeachersPage();
    });
}


export { createNavbar };





/* -- Alternatif navbar.js:---


import studentsData from './studentsData.js';
import classesData from './classesData.js';
import teachersData from './teachersData.js';

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');

    navbar.innerHTML = `
        <div class=" ">
            <nav class="navbar container navbar-expand-lg bg-body-tertiary" id="navbar">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">LMS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#" id="home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" id="classes">Classes</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link" href="#" id="teachers">Teachers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" id="students">Students</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
`;

document.getElementById('students').addEventListener('click', function() {
    import('./students.js').then(module => {
        module.showStudentsPage(studentsData);
    });
});
document.getElementById('classes').addEventListener('click', function() {
    import('./classes.js').then(module => {
        module.showClassesPage(classesData);
    });
});

document.getElementById('teachers').addEventListener('click', function() {
    import('./teachers.js').then(module => {
        module.showTeachersPage(teachersData);
    });
});

*/

