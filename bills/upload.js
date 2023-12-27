// Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFsAjT6HOrnjKOR5FsF4XDyDPEPCVJABE",
    authDomain: "leave-1ca65.firebaseapp.com",
    databaseURL: "https://leave-1ca65-default-rtdb.firebaseio.com",
    projectId: "leave-1ca65",
    storageBucket: "leave-1ca65.appspot.com",
    messagingSenderId: "643820038980",
    appId: "1:643820038980:web:c86978443b61948cbf4511"
};

// Initialize Firebase with the provided configuration
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = firebase.storage();

// Function to upload image using Fetch API
function uploadImage() {
    const imageInput = document.getElementById('imageInput');
    const uploadStatus = document.getElementById('uploadStatus');
    const uploadedImage = document.getElementById('uploadedImage');

    const file = imageInput.files[0];
    if (!file) {
        uploadStatus.textContent = 'Please select an image.';
        return;
    }

    // Create a unique filename using timestamp
    const fileName = `${Date.now()}_${file.name}`;

    // Reference to the storage location
    const storageRef = storage.ref(`images/${fileName}`);

    // Upload file to Firebase Storage
    storageRef.put(file)
        .then((snapshot) => {
            uploadStatus.textContent = 'Image uploaded successfully!';
            // Get the download URL for the uploaded image
            return snapshot.ref.getDownloadURL();
        })
        .then((downloadURL) => {
            // Display the uploaded image
            uploadedImage.src = downloadURL;
        })
        .catch((error) => {
            console.error('Error uploading image:', error);
            uploadStatus.textContent = `Error uploading image: ${error.message}`;
        });
}
