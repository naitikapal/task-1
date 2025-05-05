let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const value = e.target.innerHTML;

        if (value === 'DEL') {
            string = string.slice(0, -1);
            display.value = string;
        } else if (value === 'AC') {
            string = '';
            display.value = string;
        } else if (value === '=') {
            try {
                string = eval(string).toString();
                display.value = string;
            } catch (err) {
                display.value = "Error";
                string = '';
            }
        } else {
            string += value;
            display.value = string;
        }
    });
});
