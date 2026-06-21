function applyJob(){
    alert("Application Submitted Successfully!");
}

function searchJob(){

    let input =
    document.getElementById("search")
    .value.toLowerCase();

    let jobs =
    document.getElementsByClassName("job");

    for(let i=0;i<jobs.length;i++){

        let title =
        jobs[i].getElementsByTagName("h3")[0]
        .innerText.toLowerCase();

        if(title.includes(input)){
            jobs[i].style.display="block";
        }
        else{
            jobs[i].style.display="none";
        }
    }
}