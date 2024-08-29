document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');

    projects.forEach((project, index) => {
        setTimeout(() => {
            project.style.opacity = '1';
            project.style.transform = 'translateX(0)';
        }, index * 300);
    });
});
