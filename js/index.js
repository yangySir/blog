// window.onload=function () {
    //添加的样式是行内样式
    // let tabs=document.getElementsByClassName('tabList');
    // console.log(tabs);
    // let lis=tabs[0].getElementsByTagName('li');
    // console.log(lis);
    // let p=lis[0].getElementsByTagName('p');
    // for(let i=0;i<lis.length;i++){
    //     let ps=lis[i].getElementsByTagName('p');
    //     p[0].style.display='block';
    //     lis[0].style.background='#f7f7f7';
    //     lis[i].onmouseout=function(){
    //             // this.removeClass("hot");
    //         this.style.background='none';
    //         ps[0].style.display='none';
    //         p[0].style.display='block';
    //         // lis[0].style.background='#f7f7f7';
    //     };
    //     lis[i].onmouseover=function () {
    //         this.style.background='#f7f7f7';
    //         p[0].style.display='none';
    //         ps[0].style.display='block';
    //     };
    // }
// };


window.onload=function () {
    // 轮播图..index(保存当前窗口中照片是第几张)
    //左右按钮
    //右按钮
    // let index = 0;
    // // let alls=document.getElementsByClassName('connect1-left');
    // let banner = document.querySelectorAll('.connect1-left > .image > a');
    // let right = document.querySelector('.fadercontrols > .rightbtn');
    // let left = document.querySelector('.leftbtn');
    // banner[0].style.zIndex = 999;
    //
    //
    // right.onclick = function () {
    //     index++;
    //     if (index == banner.length) {
    //         index = 0;
    //     }
    //     banner.forEach(function (elem) {
    //         // console.log(elem);
    //         // elem[index].style.z-index=;  问题
    //         elem.style.zIndex = 1;
    //     });
    //     btns.forEach(function(elem){
    //         btns.style.background= 'none';
    //     });
    //     banner[index].style.zIndex = 999;
    //     btns[index].style.background= '#6eb49c';
    // };
    // left.onclick = function () {
    //     index--;
    //     if (index < 0) {
    //         index = banner.length - 1;
    //     }
    //     banner.forEach(function (elem) {
    //         elem.style.zIndex = 1;
    //     });
    //     banner[index].style.zIndex = 999;
    // };
    // //四个按钮
    // let lis = document.querySelectorAll(".btnList > li");
    // let btns = document.querySelectorAll(".btnList > li >.btn");
    // for(let i=0;i<btns.length;i++){
    //         btns[i].onclick=function() {
    //                 index=i;
    //         banner.forEach(function (elem) {
    //             elem.style.zIndex=1;
    //         });
    //         banner[index].style.zIndex=999;
    //         btns[index].style.background= '#6eb49c';
    //     }
    //    }
    //
    // //实现自动转换播放
    // let conne=document.querySelector('.connect1-left > .image');
    // console.log(conne);
    // let t=setInterval(right.onclick,4000);
    // conne.onmouseenter=function(){
    //     clearInterval(t);
    // };
    // conne.onmouseleave=function(){
    //     t=setInterval(right.onclick,3000);
    // };
    // //个人博客那
    // //个人博客标题那块
    let diraryes=document.querySelectorAll('.diaryList >ul >li');
    let lista=document.querySelectorAll('.diaryList >ul >li > a');
    console.log(lista);
        for(let i=0;i<lista.length;i++){
            lista[i].onclick=function(){
                    for(let j=0;j<diraryes.length;j++){
                         diraryes[j].classList.remove('active');
                    }
                diraryes[i].classList.add('active');
        }
    }
    // // 中间那块的动态分布
    let lists=document.querySelectorAll('.tabList > li');
    lists.forEach(function (elem,index) {
        elem.onmouseover=function () {
            for(let i=0;i<lists.length;i++){
                lists[i].classList.remove("hot");
            }
            this.classList.add("hot");
        }
    });


    //轮播，两块动画，current，  next
    //                  0      width
    //                -width    0
    let current=0,next=0;
    let alls=document.getElementsByClassName('connect1-left');
    let banner = document.querySelectorAll('.connect1-left > .image > a');
    let right = document.querySelector('.fadercontrols > .rightbtn');
    let left = document.querySelector('.leftbtn');
    let lis = document.querySelectorAll(".btnList > li");
    let btns = document.querySelectorAll(".btnList > li >.btn");
    let w=banner[0].offsetWidth;
    let flag=true;
    console.log(w);
    right.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        next++;
        if(next==banner.length){
            next=0;
        }
        btns.forEach(function(elem){
            elem.style.background='none';
        });
        banner[next].style.left= w +'px';
        btns[next].style.background='#6eb49c';
        // console.log(banner[next].style.left);
        animate(banner[current],{left:-w});
        animate(banner[next],{left:0},function(){
            flag=true;
        });
        current=next;

    };
    left.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        next--;
        if(next<0){
            next=banner.length-1;
        }
        btns.forEach(function(elem){
            elem.style.background='none';
        });
        // banner[current].style.opacity= 1;
        btns[next].style.background='#6eb49c';
        banner[next].style.left= -w +'px';
        console.log(banner[next].style.left);
        animate(banner[current],{left:w});
        animate(banner[next],{left:0},function(){
            flag=true;
        });
        current=next;
    }

    //四个按钮的
    for(let i=0;i<btns.length;i++){
        btns[i].onclick=function () {
            next=i;
            if(i>current){
                //左移
                banner[next].style.left= w +'px';
                animate(banner[current],{left:-w});
                animate(banner[next],{left:0});
            }else if(i<current){
                //右
                banner[next].style.left= -w +'px';
                animate(banner[current],{left:w});
                animate(banner[next],{left:0});
            }else{
                return;
            }
            btns.forEach(function(elem){
                elem.style.background='none';
            });
            btns[i].style.background='#6eb49c';
            current=next;
        }
    }
    // //实现自动转换播放
    let conne=document.querySelector('.connect1-left > .image');
    let t=setInterval(right.onclick,4000);
          conne.onmouseenter=function(){
        clearInterval(t);
    };
    conne.onmouseleave=function(){
        t=setInterval(right.onclick,3000);
    };
};
