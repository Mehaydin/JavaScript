
import studentsData from './Student/studentsData.js';

function showStudentsPage() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <h1>Students Page</h1>
        <ul>
            ${studentsData.map(student => `
                <li>${student.name} - ${student.class}</li>
            `).join('')}
        </ul>
    `;
}

export { showStudentsPage };
