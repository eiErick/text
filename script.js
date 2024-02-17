const textarea = document.querySelector(".textarea");
const saveBtn = document.querySelector("#save-btn");
const clearBtn = document.querySelector("#clear-btn");

saveBtn.addEventListener("click", () => {
    save();
});

clearBtn.addEventListener("click", () => {
    textarea.value = "";
});

function save() {
    const text = textarea.value;
    const file = new Blob([text], {type: "text/plan"});
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(file);
    link.download = "text.txt";
    link.click();
}
