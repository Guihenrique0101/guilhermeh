document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Por favor, selecione um arquivo.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/wp-content/upload.php', {
        method: 'POST',
        body: formData
    });

    const data = await response.text();
    alert(data);
});
