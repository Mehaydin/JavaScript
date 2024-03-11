
import teachersData from './Teacher/teachersData.js';

function showTeachersPage() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <h1>Teachers Page</h1>
        <ul>
            ${teachersData.map(teacher => `
                <li>${teacher.name} - ${teacher.subject}</li>
            `).join('')}
        </ul>
    `;
}

export { showTeachersPage };
