let testAreaField = document.getElementById('php-code');

testAreaField.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;

        // Insert tab character at caret position
        this.value = this.value.substring(0, start) + '\t' + this.value.substring(end);

        // Place caret at the correct position after the inserted tab
        this.selectionStart = this.selectionEnd = start + 1;
    }

    if (e.key === '{') {
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;
        var indent = '    '; // Four spaces for indentation

        // Insert opening and closing braces with indentation
        this.value = this.value.substring(0, start) + '{\n' + indent + '\n}' + this.value.substring(end);

        // Place caret between the braces
        this.selectionStart = this.selectionEnd = start + 2 + indent.length;
    }
});


function compileCode() {
    var phpCode = document.getElementById('php-code').value;

    fetch('compile.php', {
        method: 'POST',
        body: JSON.stringify({ phpCode: phpCode }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById('output').textContent = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


