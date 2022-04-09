/*
const centerText=document.querySelectorAll(".center_text");
centerText.forEach(item => {
    console.log(item.innerText);
    console.log("textContent -->",item.textContent);
    console.log("innerHTML -->",item.innerHTML);
    //item.innerHTML="<h4>Ga<h4>";
    //item.textContent="<h4>Ga<h4>";
});
*/

fetch("./../json/preguntas.json")
.then(response => response.json())
.then(data => {
    //console.log(data)
    const centerText=document.querySelectorAll(".center_text");
    
    centerText.forEach(center=>{
        center.addEventListener("click",event =>{
            //console.log(event.currentTarget.textContent);
            /*for(let i=0;i<data.length;i++){
                if(i==event.currentTarget.textContent){
                    console.log(data[i-1]);
                }
            }
            */
             let indexPregunta=data[event.currentTarget.innerHTML-1];
            //  console.log(indexPregunta);

            let modal = document.querySelector("#myModal");
            // console.log(modal);

            modal.style.display="block";

            let modalBody=document.querySelector(".modal-body p");
            modalBody.textContent=indexPregunta;

            let close=document.querySelector("#close");

            close.onclick=function(){
                modal.style.display="none";
            }
        })
    })
})

