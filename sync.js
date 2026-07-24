function register(){
    waitForInput(5000);
    console.log("Register here");
}
function login(){
    waitForInput(5000);
    console.log("Login here");
}
function getData(){
    console.log("Fetch data");
    
}
function displayData(){
    console.log("Display data");
    
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
