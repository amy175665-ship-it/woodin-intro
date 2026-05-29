let items = document.querySelectorAll(".intext1, .indBox2 > div:nth-child(1), .intext3, .indBox5 > div:nth-child(1), .gallery-item p, .indBox6 > div:nth-child(2) span, .indBox6 > div:nth-child(2) p, .indBox6_2 > div ")

const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(item){
        if(item.isIntersecting){
            item.target.classList.add("on")
        }
    })
}, {
    threshold : 0.3
})

items.forEach(function(box){
    observer.observe(box)
})





