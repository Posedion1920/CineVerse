let counter = 0;
searchbtn.addEventListener("click",function(e){
    container.innerHTML= "";
    let query = input.value;
    if(query ===""){
        alert("DU HAR IKKE INDTASTET NOGET");
        counter++;
    }
    if(counter==3){
        window.location.href="https://www.youtube.com/watch?v=pbA0VWHhJUc&ab_channel=SidewalksandSkeletons";
    }

    showSearch(query)
    .then(data=>showSeachs(data))
})
