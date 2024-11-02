
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const textarea = this.querySelector('textarea'); // Get the textarea element
    const commentText = textarea.value; // Get the value from the textarea

    const newComment = document.createElement('div'); // Create a new div for the comment
    newComment.classList.add('comment'); // Add the 'comment' class to the new div
    newComment.innerHTML = `<p><strong>You:</strong> ${commentText}</p>`; // Set the inner HTML of the new comment

    document.getElementById('comments').appendChild(newComment); // Append the new comment to the comments section
    textarea.value = ''; // Clear the textarea for new input
});

