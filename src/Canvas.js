export function getCanvas(id) {
  return document.getElementById(id);
}

export function getCanvasContext(canvas, context) {
  return canvas.getContext(context);
}

export function getScrollWidth() {
  const scrollDiv = document.createElement('div');
  scrollDiv.style.width = '100px';
  scrollDiv.style.height = '100px';
  scrollDiv.style.overflow = 'scroll';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  document.body.appendChild(scrollDiv);
  const scrollWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollWidth;
}

export function drawNode(ctx, x, y, radius) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.closePath();
}

export function draw() {
  const canvas = getCanvas('tree');
  const context = getCanvasContext(canvas, '2d');
  const scrollWidth = getScrollWidth() * 2;

  let availWidth = window.screen.availWidth;
  let availHeight = window.screen.availHeight;

  if (availWidth % 2 !== 0) availWidth--;
  if (availHeight % 2 !== 0) availHeight--;

  if (canvas.width !== availWidth) canvas.width = availWidth - scrollWidth;
  if (canvas.height !== availHeight) canvas.height = availHeight;

  const midpoint = canvas.width / 2;
  const radius = 25;
  const diameter = radius * 2;
  const xLeft = midpoint / 2;
  const xRight = midpoint * 1.5;

  context.beginPath();
  context.arc(midpoint, radius, radius, 0, Math.PI * 2, true);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.moveTo(midpoint, diameter);
  context.lineTo(xLeft, radius + diameter);
  context.moveTo(midpoint, diameter);
  context.lineTo(xRight, radius + diameter);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.arc(xLeft, 100, radius, 0, Math.PI * 2, true);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.arc(xRight, 100, radius, 0, Math.PI * 2, true);
  context.stroke();
  context.closePath();
  console.log(window.screen.availWidth);
  console.log(window.screen);
}

document.addEventListener('onload', draw());
