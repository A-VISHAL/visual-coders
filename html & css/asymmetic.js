// Function to open the login modal
function openModal() {
    // Open modal only if the user icon is clicked
    const modal = document.getElementById("loginModal");
    modal.style.display = "block"; // Display the modal
}

// Function to close the login modal
function closeModal() {
    const modal = document.getElementById("loginModal");
    modal.style.display = "none"; // Hide the modal
}

// Add an event listener to prevent actions on the search icon
document.querySelector('.fa-magnifying-glass').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up
});



