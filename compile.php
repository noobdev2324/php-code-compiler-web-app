<?php
// Receive the PHP code from the frontend
$requestData = json_decode(file_get_contents('php://input'), true);
$phpCode = $requestData['phpCode'];

// Create a temporary file
$tempFile = tempnam(sys_get_temp_dir(), 'phpcode');

// Write the PHP code to the temporary file
file_put_contents($tempFile, $phpCode);

// Execute the PHP code and capture the output
$output = shell_exec("php $tempFile");

// Clean up the temporary file
unlink($tempFile);

// Return the output
echo $output;
