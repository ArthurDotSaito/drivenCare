function unprocessableEntity(message){
    return{
        name: "UnprocessableEntityError",
        message
    };
}

function duplicatedEmailError(email){
    return{
        name:"duplicateEmailError",
        message:"There is another user with given e-mail",
        email,
    };
}

function invalidCredentialError(){
    return{
        name: "InvalidCredentialError",
        message:"e-mail or password are incorrect"
    };
}

export default{
    unprocessableEntity,
    duplicatedEmailError,
    invalidCredentialError}