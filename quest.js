function validateGoogleDriveLink(link) {
    const regex = /^(https?:\/\/)?(www\.)?drive\.google\.com/;
    return regex.test(link);
}



function validate(){
    let input_name = document.getElementById("name")

    if(input_name.value == ""){
        alert("Please fill out all forms")
        return false
    }else if(!validateGoogleDriveLink(input_name.value)){
        alert("Please use a Google Drive link")
        return false
    }
    else{
        alert("Submitted!")
        return true
    }
}