import home from "./views/home.js";
import interests from "./views/interests.js";
import skills from "./views/skills.js";
const app = document.getElementById("app");
function render() {
const route = location.hash;
if(route === "#/home"){
app.innerHTML = home();
}
else if(route === "#/interests"){
app.innerHTML = interests();
}
else if(route === "#/skills"){
app.innerHTML = skills();
}
else{
location.hash = "#/home";
}
}
window.addEventListener("hashchange", render);
window.addEventListener("load", render);
