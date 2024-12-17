document.getElementById("open-popup1").addEventListener("click", function() {
    document.getElementById("cheerdance").style.display = "block";
    });
    
    document.getElementById("open-popup2").addEventListener("click", function() {
    document.getElementById("pagarbuhay").style.display = "block";
    });
    
    document.getElementById("open-popup3").addEventListener("click", function() {
    document.getElementById("mr&ms").style.display = "block";
    });
    
    document.getElementById("cheerdance").addEventListener('click', function(e) {
        if(e.target.classList.contains('close-popup')){
            this.style.display = 'none';
    }
    
    });
    document.getElementById("pagarbuhay").addEventListener('click', function(e) {
        if(e.target.classList.contains('close-popup')){
            this.style.display = 'none';
        }
    });
    
    document.getElementById("mr&ms").addEventListener('click', function(e) {
        if(e.target.classList.contains('close-popup')){
            this.style.display = 'none';
        }
    });