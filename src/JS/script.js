window.onload = function() {
    const nav = document.getElementById('#nav'); // Certifique-se de definir `nav`
    
    function clickMenu() {
        if (nav.style.display == 'block') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
        }
    }
};