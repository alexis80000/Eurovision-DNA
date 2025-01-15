// Add simple interactivity if needed
document.addEventListener('DOMContentLoaded', () => {
    console.log("Eurovision DNA is live!");
});

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});


