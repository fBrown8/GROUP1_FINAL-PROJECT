let loginEval = document.getElementById('buttonEval');

let validateEval = (e) => {
    e.preventDefault();
        alert("Evaluation Succesful");
        window.location.href = "https://teacher-evaluation-system.herokuapp.com/student-page.html"
}
loginEval.addEventListener("click", validateEval);