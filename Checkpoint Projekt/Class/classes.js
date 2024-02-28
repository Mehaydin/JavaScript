
import classesData from './Class/classesData.js';

function showClassesPage() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <h1>Classes Page</h1>
        <ul>
            ${classesData.map(classItem => `
                <li>${classItem.name} - ${classItem.teacher}</li>
            `).join('')}
        </ul>
    `;
}

export { showClassesPage };
