function showContent(contentId) {
    // Hide all content
    var allContent = document.querySelectorAll('.hidden-content, .visible-content');
    allContent.forEach(function (content) {
        content.style.display = 'none';
    });

    // Show the selected content
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

function toggleAside() {
    var aside = document.querySelector('aside');
    aside.style.display = (aside.style.display === 'none' || aside.style.display === '') ? 'block' : 'none';
}