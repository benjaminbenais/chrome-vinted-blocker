const blocker = document.createElement('div');

blocker.style.position = 'absolute';
blocker.style.top = 0;
blocker.style.left = 0;
blocker.style.background = '#ffffff';
blocker.style.width = '100vw';
blocker.style.height = '100vh';
blocker.style.display = 'flex';
blocker.style.flexDirection = 'column';
blocker.style.justifyContent = 'center';
blocker.style.alignItems = 'center';
blocker.style.zIndex = 999999;

const img = document.createElement('img');
img.src =
  'https://i.pinimg.com/originals/46/5f/85/465f85a75046bc46cb9c879381173714.gif';

img.style.width = '370px';
img.style.height = '300px';
img.style.marginBottom = '32px';

const textWrapper = document.createElement('p');

textWrapper.style.fontSize = '24px';
textWrapper.style.fontWeight = '600';
textWrapper.style.lineHeight = '40px';
textWrapper.style.textAlign = 'center';

const line1 = document.createElement('span');
const line2 = document.createElement('span');
line1.textContent = 'This website has been blocked for the following reason:';
line2.textContent =
  'It seems you are visiting too frenquently and ordering unecessary items 😣';

line1.style.display = 'block';
line2.style.display = 'block';

textWrapper.appendChild(line1);
textWrapper.appendChild(line2);

blocker.appendChild(img);
blocker.appendChild(textWrapper);

document.body.replaceWith(blocker);
