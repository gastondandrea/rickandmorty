const validation = (userdata ,setError, errors) => {
    if(!userdata.email) setError({...errors, email: "Email vacio"});
    else{
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userdata.email)) setError({...errors, email: ""});
        else  setError({...errors, email: "Email inválido"});
    }
};  

export default validation;