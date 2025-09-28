function validate(){
    let input_link = document.getElementById("link")

    if(input_link.value == ""){
        alert("Please Insert the Link!");
        return false;
    }

    alert("Link Accepted. Please Wait");
    return true;

}