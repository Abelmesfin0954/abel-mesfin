// scripts.js

function saveProfile() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const bio = document.getElementById('bio').value;
    const profilePicture = document.getElementById('profile_picture').files[0];

    if (name && email && bio && profilePicture) {
        // Display the profile details
        document.getElementById('displayName').innerText = name;
        document.getElementById('displayEmail').innerText = email;
        document.getElementById('displayBio').innerText = bio;

        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('displayPicture').src = e.target.result;
        };
        reader.readAsDataURL(profilePicture);

        document.getElementById('profileDisplay').style.display = 'block';
    } else {
        alert('Please fill in all fields.');
    }
}
