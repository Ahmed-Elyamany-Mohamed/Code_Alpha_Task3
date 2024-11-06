// function showSection(sectionId) {
//     // Get the content from the respective section
//     var content = document.getElementById(sectionId + '-content').innerHTML;

//     // Set the content of the content-container
//     document.getElementById('content-container').innerHTML = content;

//     // Update button active state
//     var buttons = document.querySelectorAll('.nav-link');
//     buttons.forEach(button => button.classList.remove('active'));
//     event.target.classList.add('active');
// }




// function showSection(sectionId) {
//     let content = document.getElementById(sectionId + '-content').innerHTML;
    
//     let buttons = document.querySelectorAll('.nav-link');
//     buttons.forEach(button => button.classList.remove('active'));
//     event.target.classList.add('active');

//     if(sectionId === "projects"){

//         document.getElementById('content-container').innerHTML = content;
//     }
//     else if(sectionId === "resume") 
//     {
//         document.getElementById('resume-container').innerHTML = content;

//     }
// }




function showContent(selectedId) {
    // Array of container IDs
    const containerIds = ['content-container', 'resume-container', 'contact-container'];
    
    containerIds.forEach(id => {
        const container = document.getElementById(id);
        if (id === selectedId) {
            container.style.display = 'block'; // Display the selected container
        } else {
            container.style.display = 'none'; // Hide others
        }
    });

    // Update button active state
    var buttons = document.querySelectorAll('.nav-link');
    buttons.forEach(button => {
        if (button.getAttribute('onclick').includes(selectedId)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

window.onload = () => {
    showContent('content-container');
};







function toggleDarkMode() {
    const body = document.body;
    const logo = document.getElementById('theme-logo');
    const currentMode = localStorage.getItem('theme');

    if (currentMode === 'dark') {
        body.classList.remove('dark-mode');
        logo.src = '../images/icons/dark-logo.svg';

        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-mode');
        // logo.src = '../images/icons/light-logo.svg';
        logo.src = '../images/icons/1-removebg-preview.png';
        // images\icons\1-removebg-preview.png
        localStorage.setItem('theme', 'dark');
    }
    
}


document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('theme-logo');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        // logo.src = '../images/icons/light-logo.svg';
        logo.src = '../images/icons/1-removebg-preview.png';
    }
    else{
        
        logo.src = '../images/icons/dark-logo.svg';


    }
});

document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);