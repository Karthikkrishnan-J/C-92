function addusser(){
    var name_1 = document.getElementById("player_1").value;
    var name_2 = document.getElementById("player_2").value;
    console.log(name_1);
    console.log(name_2);
    localStorage.setItem("name_1", name_1);
    localStorage.setItem("name_2", name_2);
    window.location = "quiz_page.html";
}