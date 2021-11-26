

//tab 메뉴 안에 있는 li태그들 다중선택
const tabList = document.querySelectorAll(".menu > li");
const contDiv = document.querySelectorAll(".contents > .tabCont");
const contents = document.querySelector(".contents");


contents.style.height = contDiv[0].offsetHeight+"px";


for(let i=0; i<tabList.length; i++)
{
    tabList[i].addEventListener("click",()=>{

        for(let j=0; j < contDiv.length; j++)
        {
            contDiv[j].classList.remove("show");  
            tabList[j].classList.remove("on");

        }

        contents.style.height = contDiv[i].offsetHeight+"px";
        contDiv[i].classList.add("show");
        tabList[i].classList.add("on");
    });
}








