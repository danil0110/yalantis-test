const avatarInput = document.querySelector('input#avatar');
const avatarSpan = document.querySelector('.avatar-wrapper span');

avatarInput.addEventListener('change', (e) => {
    if (!e.target.files) {
        return;
    }

    avatarSpan.textContent = e.target.files[0].name;
});
