var mouseEvent = "empty"
var x,y;
    canvas= document.getElementById("myCanvas");
    ctx= canvas.getContext("2d")
    color = "black"
    width = 1;
    canvas.addEventListener("mousedown", my_mousedown)
    function my_mousedown(e){
        color = document.getElementById("color").value
        width = document.getElementById("width").value
        mouseEvent = "mouseDown"
    }
    canvas.addEventListener("mousemove", mousemove)
    function mousemove(e){
        new_x = e.clientX - canvas.offsetLeft
        new_y = e.clientY - canvas.offsetTop
        if (mouseEvent == "mouseDown"){
            ctx.beginPath()
            ctx.strokeStyle = color
            ctx.lineWidth = width
            ctx.arc(new_x,new_y,31,0,2*Math.PI)
            ctx.stroke()
        }
        x = new_x
        y = new_y
    }
    function cleararea(e){ 
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
    }