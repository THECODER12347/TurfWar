const form = document.getElementByID("draftForm");

form.addEventListener("submit", function (params) {
    params.preventDefaults();
    
    draftUpCheck(params);
    return false;
})

function draftUpCheck(data) {
    const formData = new FordData(data.target);
    alert(formData.get("username")+"|"+formData.get("password"));
}