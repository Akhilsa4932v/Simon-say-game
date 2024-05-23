let gameseq = [];
let userseq = [];

let btns = ['yellow','red','purple','green'];

let start = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener('keypress',function(){
    if(start == false){
        start = true;
        console.log('starts')

        levelup();
    }
})

function gameflash(btn){
    btn.classList.add('flash');
    
    setTimeout(function(){
        btn.classList.remove('flash')
    },250);
}

function userflash(btn){
    btn.classList.add('userflash');
    
    setTimeout(function(){
        btn.classList.remove('userflash')
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText = `level ${level}`

    //generate random number
    let randidx = Math.floor(Math.random()*3);
    //pick color of btns array 
    let randcolor = btns[randidx];
    //flash the choosen button
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq); 
    
    gameflash(randbtn);

}

function checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
        }else{
        h2.innerHTML = `Game over! your score was <b>${level}<b> <br> press any key to start`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white';
        },120)
        reset();
    }
}

function userbtnpress(){
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute('id');
    console.log(usercolor)
    userseq.push(usercolor);

    checkAns(userseq.length-1); 
}

let allbtns = document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener('click',userbtnpress);
    
}


function reset(){

    start = false;
    gameseq =[];
    userseq = [];
    level = 0;
}
