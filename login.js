function validate(){
    let input_name = document.getElementById("name")
    let input_pw = document.getElementById("pw")

    if(input_name == "" || input_pw.value == "" ){
        alert("Please fill out all forms")
        return false
   }else{
        alert("Welcome to jenius academy")
        return true
    }
}

function isAlphanum(element){
    for(let i = 0; i < element.length; i++){
        if(element[i] >= 'a' && element[i] <= 'z'){
            continue
        }else if(element[i] >= 'A' && element[i] <= 'Z'){
            continue
        }else if(element[i] >= '0' && element[i] <= '9'){
            continue
        }else{
            return false
        }
    }
    return true
}