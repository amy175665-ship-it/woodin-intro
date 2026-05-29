 //  ------------------ 메뉴바  ------------------
        let nav = document.querySelector(".nav")
        let gnb = document.querySelector(".gnb")
        let sections = document.querySelectorAll(".swrap > section")

        let ham = document.querySelector(".ham")
        let fullmenu = document.querySelector(".fullmenu")
        let closebtn = document.querySelector(".closebtn")


        console.log(sections)
        // mouseenter : gnb에 마우스가 올라갔을때, nav가 넓어지도록.(class에 on 붙히는거임)
        gnb.addEventListener("mouseenter", function(){
            nav.classList.add("on")
        })
        
        // mouseleave : 마우스가 떠나갈때, on 제거 (remove)
        gnb.addEventListener("mouseleave", function(){
            nav.classList.remove("on")
        })

        

        //  ------------------ 햄버거 메뉴  ------------------
        ham.addEventListener("click", function(){
            fullmenu.classList.add("on")
        })

        closebtn.addEventListener("click", function(){
            fullmenu.classList.remove("on")
        })


        // ------------------ 옵저브 설정 ------------------
        let activeItems = document.querySelectorAll(".imgBox, .textBox")
        // 옵저브 하기전에 단계.

        const observe  = new IntersectionObserver(function(entries){
            entries.forEach(function(entry){
                if(entry.isIntersecting){
                    entry.target.classList.add("on")
                }else{
                     entry.target.classList.remove("on")
                }
            })
        },{
            threshold : 0.1
        })
       

        //  ------------------ 섹션 전환 함수 ------------------
        function onpage(num){
            // 모든 섹션 끄기.
            sections.forEach(function(item){
                item.classList.remove("on")
            })

            fullmenu.classList.remove("on")
            // 풀메뉴 지워줘 !

            sections[num].classList.add("on")
            
        

            // 옵저브 만든 뒤 단계.
            let newItems = sections[num].querySelectorAll(".imgBox, .textBox")
            newItems.forEach(function(item){
                observe.observe(item)
            })
        }
        onpage(0); 
