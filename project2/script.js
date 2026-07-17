function yes(){
    document.getElementById("msg").innerHTML="🥰 I Love You Too ❤️";
}

let no=document.getElementById("no");

no.addEventListener("mouseover",function(){

    let x=Math.random()*(window.innerWidth-150);
    let y=Math.random()*(window.innerHeight-100);

    no.style.position="absolute";
    no.style.left=x+"px";
    no.style.top=y+"px";

});