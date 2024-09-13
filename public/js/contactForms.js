document.addEventListener('DOMContentLoaded', function() {
    // Get modal and form elements
    const formModal = document.getElementById('formModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const callBackBtn = document.getElementById('callBackBtn');
    const appointmentBtn = document.getElementById('appointmentBtn');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');

    // Forms
    const callBackForm = document.getElementById('callBackForm');
    const appointmentForm = document.getElementById('appointmentForm');

    if (!formModal || !modalOverlay || !callBackBtn || !appointmentBtn || !closeModal || !modalTitle || !callBackForm || !appointmentForm) {
        console.error('One or more elements not found in the DOM.');
        return;
    }

    // Function to show modal with specific form
    function showModal(title, formToShow, formToHide) {
        modalTitle.innerText = title;
        formToShow.style.display = 'block';  // Show selected form
        formToHide.style.display = 'none';   // Hide the other form
        formModal.classList.add('show');
        modalOverlay.classList.add('show');
    }

    // Hide the modal
    function hideModal() {
        formModal.classList.remove('show');
        modalOverlay.classList.remove('show');
    }

    // Event listeners
    callBackBtn.addEventListener('click', () => {
        showModal('Request a Call Back', callBackForm, appointmentForm);
    });

    appointmentBtn.addEventListener('click', () => {
        showModal('Book an Appointment', appointmentForm, callBackForm);
    });

    closeModal.addEventListener('click', hideModal);
    modalOverlay.addEventListener('click', hideModal);
});
