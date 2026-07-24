function register(){
    setTimeout(()=>{
        console.log("register here");
    },6000)
}
function login(){
    waitForInput(5000);
    console.log("Login here");
}
function getData(){
    setTimeout(()=>{
        console.log("fetch data");
    },6000)
    
}
function displayData(){
    setTimeout(()=>{
        console.log("register here");
    },1000)
    
}
function waitForInput(delay){
    const ct = Date.now();
    const ms = ct + delay;
    while(Date.now() < ms){
        console.log("yess");
    } 
}
register();
login();
getData();
displayData();
console.log("Call another App");
