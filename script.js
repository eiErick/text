const textarea = document.querySelector(".textarea");
const saveBtn = document.querySelector("#save-btn");
const clearBtn = document.querySelector("#clear-btn");
const openBtn = document.querySelector("#open-btn");
const inputFile = document.querySelector(".in-file");

let fileTitle = "text.txt";

saveBtn.addEventListener("click", () => {
    save();
});

clearBtn.addEventListener("click", () => {
    const confirm = window.confirm('Are you sure you want to delete everything?');
    if (confirm) textarea.value = "";
});

inputFile.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    fileTitle = file.name;
    reader.onload = function(event) {
        const contents = event.target.result;
        textarea.value = contents;
    }
    reader.readAsText(file);
});

function save() {
    const text = textarea.value;
    const file = new Blob([text], {type: "text/plan"});
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(file);
    link.download = fileTitle;
    link.click();
}
