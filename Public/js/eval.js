let loginEval = document.getElementById('buttonEval');

let validateEval = (e) => {
    e.preventDefault();
        alert("Evaluation Succesful");
        window.location.href = "http://localhost:3000/student-page.html"
}
loginEval.addEventListener("click", validateEval);