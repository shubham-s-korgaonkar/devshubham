const myButton = document.getElementById('name1');
myButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default button behavior
    window.open('https://github.com/shubham-korgaonkar', '_blank');
});
