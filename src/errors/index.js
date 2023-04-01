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

export default{
    unprocessableEntity,
    duplicatedEmailError}