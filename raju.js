let navbtns=document.getElementsByTagName("button")
navbtns[0].addEventListener("click", (e)=>{
    navbtns[0].style.color="rgb(236, 6, 225)"
    // navbtns[0].style.color="rgb(0, 255, 123)"
    navbtns[0].style.backgroundColor="blue";
    navbtns[1].style.color="rgb(0, 204, 255)"
    navbtns[1].style.backgroundColor="chocolate";
    navbtns[2].style.color="rgb(0, 204, 255)"
    navbtns[2].style.backgroundColor="chocolate"
    let ganesh=document.getElementById("ganesh")
    ganesh.style.display="none";
    let nandhu=document.getElementById("nandhu")
    nandhu.style.display="none";
    let all=document.getElementById("all")
    all.style.display="block";
})


//ganesh
navbtns[1].addEventListener("click", (e)=>{
    navbtns[1].style.color="rgb(236, 6, 225)"

    navbtns[1].style.backgroundColor="blue";
    navbtns[0].style.color="rgb(0, 204, 255)"
    navbtns[0].style.backgroundColor="chocolate";
    navbtns[2].style.color="rgb(0, 204, 255)"
    navbtns[2].style.backgroundColor="chocolate"
    let ganesh=document.getElementById("ganesh")
    ganesh.style.display="block";
    let nandhu=document.getElementById("nandhu")
    nandhu.style.display="none";
    let all=document.getElementById("all")
    all.style.display="none";
})

//nandhu
navbtns[2].addEventListener("click", (e)=>{
    navbtns[2].style.color="rgb(236, 6, 225)"
    navbtns[2].style.backgroundColor="blue";
    navbtns[1].style.color="rgb(0, 204, 255)"
    navbtns[1].style.backgroundColor="chocolate";
    navbtns[0].style.color="rgb(0, 204, 255)"
    navbtns[0].style.backgroundColor="chocolate"
    let ganesh=document.getElementById("ganesh")
    ganesh.style.display="none";
    let nandhu=document.getElementById("nandhu")
    nandhu.style.display="block";
    let all=document.getElementById("all")
    all.style.display="none";
})