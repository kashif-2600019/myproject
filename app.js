const nameInput = document.getElementById("name");
const marksInput = document.getElementById("marks");
const calcBtn = document.getElementById("calcBtn");
const result = document.getElementById("result");

function getGrade(marks) {
    if (marks >= 85) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else {
        return "F";
    }
}

function showResult(message, type) {
    result.textContent = message;
    result.className = type;
}

calcBtn.addEventListener("click", () => {
    const studentName = nameInput.value.trim();
    const marksText = marksInput.value.trim();
    const marks = Number(marksText);

    if (studentName === "") {
        showResult("Please enter the student's name.", "error");
        return;
    }

    if (marksText === "" || isNaN(marks) || marks < 0 || marks > 100) {
        showResult("Please enter marks between 0 and 100.", "error");
        return;
    }

    const grade = getGrade(marks);
    const message = `${studentName} scored ${marks} → Grade ${grade}`;

    if (grade === "F") {
        showResult(message, "fail");
    } else {
        showResult(message, "pass");
    }
});