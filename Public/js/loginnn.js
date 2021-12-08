let loginButton = document.getElementById('loginButton');
let password = document.getElementById('psw');
let username = document.getElementById('UserID');

let validateLogin = async (e) => {
    e.preventDefault();
    let passwordArray = password.value.split("-");
    if (password.value == 'admin' && username.value == 'admin') {
        window.location.href = "https://teacher-evaluation-system/admin-dashboard.html";
        alert("Login successfully");
    }

    else if (passwordArray[0] == 01) {
        console.log('Success!');
        const response = await fetch("http://localhost:3000/api/students");
        const data = await response.json();
        console.log(data);
        data.forEach((students) => {
            if (username.value == students.Student_Number && password.value == students.Student_Number) {
                window.location.href = "http://localhost:3000/student-page.html"
                alert("Login successfully");
            }
        });
    }
    else if (passwordArray[0] == 02) {
        console.log('Successs!');
        const response = await fetch("http://localhost:3000/api/teachers");
        const data = await response.json();
        console.log(data);
        data.forEach((teachers) => {
            if (username.value == teachers.Faculty_Id && password.value == teachers.Faculty_Id) {
                window.location.href = "http://localhost:3000/faculty-page.html"
                alert("Login successfully");
            }
        });
    }else{
        alert("Login Failed!");
    }
}
loginButton.addEventListener("click", validateLogin);
