const generateBtn = document.querySelector("#gerenate-btn");
const input = document.querySelector("#qr-text");

const qrCodeDiv = document.querySelector(".qr-code");

generateBtn.addEventListener("click", () => {
    const qrText = document.querySelector("#qr-text").value;

    if(qrText) {
        qrCodeDiv.innerHTML = "";
        const qrCode = new QRCode(qrCodeDiv, qrText);
    }

    input.value = '';
    
})