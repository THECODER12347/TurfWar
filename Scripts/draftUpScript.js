const form = document.getElementById("draftForm");

form.addEventListener("submit", function (params) {
    params.preventDefault();
    
    draftUpCheck(params);
    return false;
})

function draftUpCheck(data) {
    const formData = new FormData(data.target);
    alert(formData.get("username")+"|"+formData.get("password"));
}