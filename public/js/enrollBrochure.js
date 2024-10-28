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

const bURLs = {

    "Full Stack Development" : "https://drive.google.com/uc?export=download&id=1ugGaTS_7YDQfQ4xeWSb5Zr3bywKJBYbx",

    "Data Analysis" : "https://drive.google.com/uc?export=download&id=10_CARUHiLCaW2B4r21RfrpFiPgsG-4RN",

    "AI and Machine Learning" : "https://drive.google.com/uc?export=download&id=1fSRawOpEfVFJrnhLhcR3TR7-SG_zGBNZ",

    "Digital Marketing" : "https://drive.google.com/uc?export=download&id=1WZ2QPMbbmLI2znzffO8NRtuauWG62bc6",

    "Graphic Design" : "https://drive.google.com/uc?export=download&id=13HoFcooJWFaXt5IxDF4ZTVSyi7EloESz",

    "Professional Accounting and MIS Specialist" : "https://drive.google.com/uc?export=download&id=1_QbeC-9oEUHGF3gR3ZKZy8wGxroYqODu",

    "Website Designing" : "https://drive.google.com/uc?export=download&id=1sJRCfxPPlBP6iQ7Ce_45i2qGJubXRYv9",

    "MS Office + Taxation" : "https://drive.google.com/uc?export=download&id=1dRs6ZQDv9ACpc0PL26SbUFtCndkgH54s"
};

document.getElementById('brochureForm').addEventListener('submit', function (e) {
    e.preventDefault();
    closePopup('brochurePopup');

    // Trigger PDF download
    console.log(bURLs[brochureTitle]);
    const link = document.createElement('a');
    link.href = bURLs[brochureTitle];
    link.download = brochureTitle;
    link.target = '_blank';
    link.click(); // Trigger the download
});

// Handle enroll form submission
document.getElementById('enrollForm').addEventListener('submit', function (e) {
    closePopup('enrollPopup');
});