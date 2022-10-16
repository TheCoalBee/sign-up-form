const pass = document.getElementById('user-pass');
const confirmPass = document.getElementById('user-pass-confirm');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
    pass.classList.remove("invalid", "shake");
    confirmPass.classList.remove("invalid", "shake");
    if (pass.value != "" && confirmPass.value != "") {
        if (pass.value == confirmPass.value) {
            pass.classList.remove("invalid", "shake");
            confirmPass.classList.remove("invalid", "shake");
        } else {
            pass.classList.remove("invalid", "shake");
            confirmPass.classList.remove("invalid", "shake");
            pass.classList.add("invalid", "shake");
            confirmPass.classList.add("invalid", "shake");
        }
    } else {
        pass.classList.add("invalid", "shake");
        confirmPass.classList.add("invalid", "shake");
        console.log('added');
    }
});