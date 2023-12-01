let toastBox = document.getElementById('toastBox');
let successMsg = 'İşleminiz Gerçekleşti... (success)';
let errorMsg = 'İşleminiz Hata Verdi... (error)';
let invalidMsg = 'Girdiğiniz Değerler Geçersiz... (invalid)';

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.includes('error')) {
        toast.classList.add('error');
    }

    if (msg.includes('invalid')) {
        toast.classList.add('invalid');
    }

    setTimeout(() => {
        toast.remove();
    }, 6000);
}