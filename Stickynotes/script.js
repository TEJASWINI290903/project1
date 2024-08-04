const stickyNotes = document.querySelectorAll('.sticky-note');

stickyNotes.forEach(note => {
  const canvas = document.createElement('canvas');
  note.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  // Set canvas dimensions
  canvas.width = note.offsetWidth - 40; // Adjust for padding
  canvas.height = note.offsetHeight - 80; // Adjust for padding and header

  // Mouse interaction
  let isDrawing = false;
  let x = 0;
  let y = 0;

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    x = e.offsetX;
    y = e.offsetY;
  });

  canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
      drawLine(ctx, x, y, e.offsetX, e.offsetY);
      x = e.offsetX;
      y = e.offsetY;
    }
  });

  canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    x = 0;
    y = 0;
  });

  canvas.addEventListener('mouseout', () => {
    isDrawing = false;
    x = 0;
    y = 0;
  });

  function drawLine(ctx, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
  }
});
script.js
