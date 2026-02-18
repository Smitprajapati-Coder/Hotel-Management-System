<?php
include "db.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $cartData = json_decode(file_get_contents("php://input"), true);

    if (!$cartData || !isset($cartData['items'])) {
        echo json_encode(["status" => "error", "message" => "Invalid data"]);
        exit;
    }

    $items = $cartData['items'];
    $total = $cartData['total'];

    $stmt = $conn->prepare("INSERT INTO orders (items, total) VALUES (?, ?)");
    $items_json = json_encode($items);
    $stmt->bind_param("sd", $items_json, $total);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Order saved successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => $conn->error]);
    }

    $stmt->close();
    $conn->close();
}
?>
