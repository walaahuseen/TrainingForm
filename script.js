document.getElementById("trainingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);
    var isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get("email"));
    if (!isValidEmail) {
        alert("Please enter a valid email address.");
        return;
    }
    var trainingArea = formData.get("trainingArea");
    if (!trainingArea) {
        alert("Please select a training area.");
        return;
    }
    document.getElementById("thankYouMessage").style.display = "block";
    form.reset();
});
