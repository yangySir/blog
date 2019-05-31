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
    let index = 0;
    // let alls=document.getElementsByClassName('connect1-left');
    let banner = document.querySelectorAll('.connect1-left > .image > a');
    let right = document.querySelector('.fadercontrols > .rightbtn');
    let left = document.querySelector('.leftbtn');
    banner[0].style.zIndex = 999;
    // alls[0].onmouseenter=function(){
    //     console.log(1);
    //     let speed=-5;
    //     b(-5);
    //     function b(speed){
    //         let lefts=getComputedStyle(left,null).left;
    //         let rights=getComputedStyle(right,null).right;
    //        for(let i=0;lefts>18;i++){
    //            console.log(2);
    //            left.style.left=parseInt(lefts)+speed+'px';
    //            right.style.right=parseInt(rights)+speed+'px';
    //        }
    //     }
    //
    // };
    right.onclick = function () {
        index++;
        if (index == banner.length) {
            index = 0;
        }
        banner.forEach(function (elem) {
            // console.log(elem);
            // elem[index].style.z-index=;  问题
            elem.style.zIndex = 1;
        });
        banner[index].style.zIndex = 999;
        // banner[index].style.
    };
    left.onclick = function () {
        index--;
        if (index < 0) {
            index = banner.length - 1;
        }
        banner.forEach(function (elem) {
            elem.style.zIndex = 1;
        });
        banner[index].style.zIndex = 999;
    };
    //四个按钮
    let lis = document.querySelectorAll(".btnList > li");
    let btns = document.querySelectorAll(".btnList > li >.btn");
    for(let i=0;i<btns.length;i++){
            btns[i].onclick=function() {
                    index=i;
            banner.forEach(function (elem) {
                elem.style.zIndex=1;
            });
            banner[index].style.zIndex=999;
        }
       }

    //实现自动转换播放
    let conne=document.querySelector('.connect1-left > .image');
    console.log(conne);
    let t=setInterval(right.onclick,4000);
    conne.onmouseenter=function(){
        clearInterval(t);
    };
    conne.onmouseleave=function(){
        t=setInterval(right.onclick,3000);
    };
    //个人博客那
    //个人博客标题那块
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
    // 中间那块的动态分布
    let lists=document.querySelectorAll('.tabList > li');
    lists.forEach(function (elem,index) {
        elem.onmouseover=function () {
            for(let i=0;i<lists.length;i++){
                lists[i].classList.remove("hot");
            }
            this.classList.add("hot");
        }
    });


};
