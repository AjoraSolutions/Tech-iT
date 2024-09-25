 // Show the brochure popup
 document.getElementById('brochureBtn').addEventListener('click', function () {
    document.getElementById('brochurePopup').style.display = 'block';
});

// Show the enroll popup
document.getElementById('enrollBtn').addEventListener('click', function () {
    document.getElementById('enrollPopup').style.display = 'block';
});

// Close popup function
function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Handle brochure form submission
document.getElementById('brochureForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! Your brochure will now download.');
    closePopup('brochurePopup');

    // Simulate PDF download
    const link = document.createElement('a');
    link.href = 'path-to-your-brochure.pdf'; // Path to your PDF file
    link.download = 'Tech-it_Brochure.pdf';  // Set the name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Handle enroll form submission
document.getElementById('enrollForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for enrolling!');
    closePopup('enrollPopup');
});