export function validasiBuatMasuk( email , pass ){
    const regexBuatEmail = /^[A-Za-z.]+[\w\d]+@\w+\.\w+/
    const regexBuatPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    let message =""

    if(!email.match(regexBuatEmail)){
        alert("tolong masukan email yang valid")
    }   
    else if(pass.match(regexBuatPassword)){
        alert("Welcome to The Jungle")
    }
    else{
        alert("tolong masukan password sesuai ketentuan")
    }
}