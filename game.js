let userscore =0;
let compuser =0;

// const choice =()=>{

// }
//acess the images
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score")
const compscorepara = document.querySelector("#comp-score")
    

const gencompchoice = ()=>{
    const options =["rock", "paper", "scissors"];
    const rendomidx = Math.floor(Math.random() * 3);
    return options[rendomidx];
};
 const draw =()=>{
    //console.log("game was draw")
    msg.innetText ="Game was draw";
    msg.style.backgroundColor ="black";

 }
 const showwinner = (userwin , userChoice, compchoice)=>{
    if(userwin){
        //console.log("u r winner")
        userscore++;
        userscorepara.innerText =userscore;
        msg.innerText =`you win!  your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor ="green";
    }else{
        //console.log("lose")
        compuser++;
        compscorepara.innerText =compuser;
        msg.innerText =`you lost! ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}
const playgame  = (userChoice) => {
    console.log(" user choice" , userChoice);
   
    const compchoice = gencompchoice();
    console.log("computer choice" , compchoice);
    if(userChoice===compchoice){
        draw();
        msg.innerText ="you was draw";
    }
    else{
        let userwin = true;
        if(userChoice=== "rock"){
          userwin=  compchoice === "paper"? false:true;
        }
        else if(userChoice==="paper"){
            userwin=  compchoice === "scissors"? false:true;
        } else{
            userwin= compchoice ==="rock" ?false:true;
        }
        showwinner(userwin , userChoice, compchoice);
    }
};

 // work when user click 
choices.forEach((choice) =>{
     choice.addEventListener("click" ,()=>{
       
        // get the id when click particular image
        const  userChoice = choice.getAttribute("id");
       // const compchoice = choice.getAttribute("id");
        playgame(userChoice);
        
     });
});