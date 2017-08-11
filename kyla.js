<h1 id="demo">Mouse over me</h1>

<script>
document.getElementById("demo").onmouseover = function() {mouseOver()};
document.getElementById("demo").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("demo").style.color = "red";
}

function mouseOut() {
