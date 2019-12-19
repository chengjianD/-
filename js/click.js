window.onload = function () {
    //时钟
    (function(){
        let nowDate;
        let hours , minutes , seconds;  
        let newStr =  "",
            lastStr = "";
        let oPTop = document.querySelectorAll("#time ul li .top"),
            oPBottom = document.querySelectorAll("#time ul li .bottom"),
            oUl = document.querySelectorAll("#time ul");
        //获取时刻
        function getTime(){
            nowDate = new Date();
            hours = nowDate.getHours();
            minutes = nowDate.getMinutes();
            seconds = nowDate.getSeconds();
            if(Math.floor(seconds/10)===0){
                seconds = "" + 0 + seconds; 
            }
            if(Math.floor(hours/10)===0){
                hours = "" + 0 + hours; 
            }
            if(Math.floor(minutes/10)===0){
                minutes = "" + 0 + minutes; 
            }
            newStr ="" + hours + minutes + seconds ;
        }
        //变化函数
        function change(index){
            oPTop[index].innerHTML = lastStr.charAt(index);
            oPBottom[index].innerHTML = newStr.charAt(index);
        }
        //初始化时间
        getTime();
        lastStr = newStr;
        oPTop.forEach(function(item,index){
            change(index);
        });
        //时间变化
        setInterval(function(){
            getTime();
            oPTop.forEach(function(item,index){
                change(index);
                if(lastStr.charAt(index)!==newStr.charAt(index)){
                    oUl[index].style.marginTop = "-60px";
                    oUl[index].style.transition = ".5s";
                    setTimeout(function(){
                        item.innerHTML = newStr.charAt(index);
                        oUl[index].style.marginTop = "0px";
                        oUl[index].style.transition = "0s";
                    },800);
                }
                
            });
            lastStr = newStr;
        },1000)
    })();
    //事件
    (function(){
        let position = {
            first: "front",
            second: "right",
            third: "left"
        }
        let str = "";
        let controlDiv = document.querySelectorAll(".stage button");
        let oP = document.querySelectorAll(".wrap>.stage>p");
        function add(){
            oP.forEach((item) => {
                item.classList.remove("front", "left", "right");
            })
            oP[0].classList.add(`${position.first}`);
            oP[1].classList.add(`${position.second}`);
            oP[2].classList.add(`${position.third}`);
        }
        controlDiv[0].onclick = function () {
            str = position.first;
            position.first = position.third;
            position.third = position.second;
            position.second = str;
            add();
        }
        controlDiv[1].onclick = function () {
            str = position.first;
            position.first = position.second;
            position.second = position.third
            position.third = str;
            add();
        }     
    })();
    //蛛网特效
    
}