const information = () => {
    
let profile = {
    firstName :'',
    lastName :'',
    country: '',
    phoneNumber: '',
    state: '',
    city:'',
    village:''
}

if(localStorage.getItem('profile')!==null) {
    profile = JSON.parse(localStorage.getItem('profile'))
}else{
    for(const key in profile){
        const value= prompt("Please Enter" + key)
        profile[key] = value
    }
        localStorage.setItem('profile', JSON.stringify(profile))
    }
for(const key in profile){
    document.getElementById(key).textContent = profile[key]
}
}
information()