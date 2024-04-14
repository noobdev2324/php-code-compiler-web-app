<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div class=" container">
        <h1>PHP Compiler</h1>
        <textarea id="php-code" placeholder="Enter your PHP code here"><?php echo htmlspecialchars('<?php'); ?></textarea>
        <button onclick="compileCode()">Compile</button>
        <textarea id="output" placeholder="Output"></textarea>
    </div>
    <script src="script.js"></script>
</body>

</html>