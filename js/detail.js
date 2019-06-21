window.onload=function(){
    let form=document.querySelector('form');
    let text=document.querySelector('textarea');
    let p=document.createElement('p');
    let date=new Date();
    let num;
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!!存在问题！！！！！！！！！
    let prev=0;
    let humb=document.querySelectorAll('.boxImg > .humb');
    humb.forEach(function (elem,index) {
        elem.style.cssText="opacity:0.7";
        humb[index].onclick=function() {
            num=index;
            humb[prev].style.cssText = "opacity:0.7";
            humb[index].style.cssText = "opacity:1";
            prev = index;
        }
    });


    text.onkeyup=function () {
       let len=text.value.length;
       p.innerText="已写"+len+"个字";
       if(len>100){
          //限制数,设为只读模式
           p.innerText="已写"+len+"个字，超过限制";
           text.readOnly=true;
       }
   };
    form.insertBefore(p,text);
    let inputt=document.getElementsByName('input');
    let messageBox=document.querySelector('.discuss > ul >li:last-child');
    // console.log(messageBox);
    let ul=document.querySelector('.discuss > ul');
    inputt[0].onclick=function(e){
        e.preventDefault();
        let user=document.getElementsByName('username');
        let name=user[0].value;
        let time=date.toLocaleString();
        insertMessage(name,time,num);
    };

// <img src="./image/rentou.jpg" alt="">
    // let tu=document
    function insertMessage(name,time,num) {
        let list=
            `
                <li>
                    <div class="rentou"><img src="./image/tx${num+1}.jpg" alt=""></div>
                    <div class="p"><p><span>${time}</span>${name}</p>
                        <p>${text.value}</p></div>
                </li>
           
            `;

            ul.innerHTML=list+ul.innerHTML;

   }
};