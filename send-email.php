<?php

header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$name = $data["name"] ?? "";
$email = $data["email"] ?? "";
$phone = $data["phone"] ?? "";
$message = $data["message"] ?? "";

$sendgridApiKey = "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";

$emailData = [
    "personalizations" => [
        [
            "to" => [
                ["email" => "vish@nesthomessa.com.au"]
            ]
        ]
    ],
    "from" => [
        "email" => "info@nesthomessa.com.au"
    ],
    "subject" => "New Website Enquiry",
    "content" => [
        [
            "type" => "text/plain",
            "value" =>
                "Name: $name\n" .
                "Email: $email\n" .
                "Phone: $phone\n" .
                "Message: $message"
        ]
    ]
];

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://api.sendgrid.com/v3/mail/send");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer " . $sendgridApiKey,
    "Content-Type: application/json"
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($emailData));

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode([
        "success" => false,
        "response" => $response
    ]);
}