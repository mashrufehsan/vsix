document.getElementById('downloadBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const url = `https://vsix-downloader-mashruf.onrender.com/api/v1/get-vsix?marketplace_url=${document.getElementById('url').value}&version=${document.getElementById('version').value}`;
    window.location.href = url;
});
