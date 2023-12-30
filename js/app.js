document.addEventListener('DOMContentLoaded', function () {
    // Add click event listener to the toggleGallery button
    const toggleButton = document.getElementById('toggleGallery');
    const galleryContainer = document.getElementById('imageGallery');

    toggleButton.addEventListener('click', function () {
        // Toggle the visibility of the gallery
        if (galleryContainer.style.display === 'none' || galleryContainer.style.display === '') {
            galleryContainer.style.display = 'flex';
        } else {
            galleryContainer.style.display = 'none';
        }
    });
});
