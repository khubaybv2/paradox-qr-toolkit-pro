document.getElementById('generate').addEventListener('click', function () {
  let qrText = document.getElementById('text').value;
  let qrContainer = document.getElementById('qr-container');
  qrContainer.innerHTML = '';
  new QRCode(qrContainer, qrText);
});
