let errorMessage = new URLSearchParams(window.location.search).get('error');

window.onload = () => {

    let errorP = document.getElementById('error');

    errorP.innerHTML = errorMessage;

}