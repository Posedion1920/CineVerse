searchbtn.addEventListener("click",function(e){
    container.innerHTML= "";
    let query = input.value;
    if(query ===""){
        alert("DU HAR IKKE INDTASTET NOGET");
    }
    showSearch(query)
    .then(data=>showSeachs(data))
})
