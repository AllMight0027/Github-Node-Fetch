function submit(){
    var name=document.getElementById('ipb').value
    console.log(name)
    fetch(`https://api.github.com/users/${name}`)
    .then(res=>res.json())
    .then(json=>{
        console.log(json)
        var table= document.getElementById("mtab");
        table.innerHTML=""
        display(json)
    })
}

function display(json){
    if(json.message!=undefined){
        alert(json.message);
    }
    else{
        var table= document.getElementById("mtab");
        var row= "<tr><td><h4>Name</h4></td><td><h4>Profile Photo</h4></td><td><h4>Region</h4></td><td><h4>Repositories</h4></td><td><h4>Date Joined</h4></td></tr>";
        table.innerHTML+=row;
        row= `<tr><td><h4>${json.name}</h4></td><td><img src= ${json.avatar_url}+ height='80' width='80' style='padding:5px;'></td><td><h4>${json.location}</h4></td><td><h4>${json.public_repos}</h4><a href = "https://github.com/${json.login}?tab=repositories" target="_blank">View Repos</a></td><td><h4>${json.created_at.substring(0, 10)}</h4></td></tr>`;
        table.innerHTML+=row;
    }
}

var input=document.getElementById("ipb");
input.addEventListener('keyup',(e)=>{
    if(e.keyCode==13){
        submit();
    }
})