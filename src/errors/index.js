function unprocessableEntity(message){
    return{
        name: "UnprocessableEntityError",
        message
    }
}

function duplicatedEmailError(){
    return{
        name:"duplicateEmailError",
        message:"There is another user with given e-mail"
    }
}

function invalidCredentialError(){
    return{
        name: "InvalidCredentialError",
        message:"e-mail or password are incorrect"
    }
}

export default{
    unprocessableEntity,
    duplicatedEmailError,
    invalidCredentialError}