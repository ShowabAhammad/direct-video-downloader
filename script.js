document.getElementById('downloadBtn').addEventListener('click', () => {
  const url = document.getElementById('videoUrl').value.trim();

  if (!url) {
    alert('Please enter a valid video URL.');
    return;
  }

  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.download = extractFilename(url) || 'downloaded-video';

  document.body.appendChild(link);
  link.click();
  link.remove();
});

function extractFilename(url) {
  try {
    const parsed = new URL(url);
    const pathname = parsed.pathname;
    const lastSegment = pathname.split('/').filter(Boolean).pop();
    return lastSegment || 'downloaded-video';
  } catch {
    return 'downloaded-video';
  }
}
