document.getElementById('downloadBtn').addEventListener('click', (e) => {
    e.preventDefault();

    const url = `https://vsix-downloader-mashruf.onrender.com/api/v1/get-vsix?marketplace_url=${document.getElementById('url').value}&version=${document.getElementById('version').value}`;

    fetch(url)
        .then(response => {
            const disposition = response.headers.get('Content-Disposition');
            const filename = disposition.split('filename=')[1];
            return response.blob().then(blob => ({ blob, filename }));
        })
        .then(({ blob, filename }) => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => console.error('Error downloading file:', error));
});
