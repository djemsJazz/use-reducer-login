export const login = (username, password) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(username ==='Djems' && password === 'admin'){
                resolve()
            }else{
                reject()
            }
        },2000)
    })
}