document.getElementById('downloadBtn').addEventListener('click', (e) => {
    e.preventDefault();

    const url = `https://vsix-downloader-mashruf.onrender.com/api/v1/get-vsix?marketplace_url=${document.getElementById('url').value}&version=${document.getElementById('version').value}`;

    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
