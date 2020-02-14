   var body = document.getElementsByTagName('body');
    document.body.innerHTML +='<div class="footer"><div><a href="https://github.com/yatlagh/bu_icons/blob/master/download/Archive.zip"> <button class="btn" style="width:100%"><i class="fa fa-download"></i> Download Icons</button></a></div><div style="background-color: #282923; color: white; text-align: center; padding:10px;"><span style="color: #989587"> &#60;!--You can place Font Awesome icons just about anywhere using the icon’s name and a SPAN element to reference the icon--&#62;</span><br>&#60;<span style=" color: #f92372;">span</span> <span style="color: #a6e22c">class</span><span style="color: #e7db74;">="Class_Here"</span>&#62;Text&#60;/<span style=" color: red;">span</span>&#62;s</div></div>';

if (!('boxShadow' in document.body.style)) {
    document.body.setAttribute('class', 'noBoxShadow');
}

document.body.addEventListener("click", function(e) {
    var target = e.target;
    if (target.tagName === "INPUT" &&
        target.getAttribute('class').indexOf('liga') === -1) {
        target.select();
    }
});

(function() {
    var fontSize = document.getElementById('fontSize'),
        testDrive = document.getElementById('testDrive'),
        testText = document.getElementById('testText');
    function updateTest() {
        testDrive.innerHTML = testText.value || String.fromCharCode(160);
        if (window.icomoonLiga) {
            window.icomoonLiga(testDrive);
        }
    }
    function updateSize() {
        testDrive.style.fontSize = fontSize.value + 'px';
    }
    fontSize.addEventListener('change', updateSize, false);
    testText.addEventListener('input', updateTest, false);
    testText.addEventListener('change', updateTest, false);
    updateSize();
}());
