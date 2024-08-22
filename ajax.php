<?php
include 'dbcon.php';

if (isset($_GET['genre'])) {
    $genre = $_GET['genre'];
    
    // Prepare and execute the SQL statement
    $stmt = $conn->prepare("SELECT title FROM movies WHERE genre LIKE ?");
    $genre_param = "%".$genre."%";
    $stmt->bind_param("s", $genre_param);
    $stmt->execute();
    
    $result = $stmt->get_result();
    $movies = [];
    
    while ($row = $result->fetch_assoc()) {
        $movies[] = $row['title'];
    }
    
    echo json_encode($movies);
    
    $stmt->close();
}

$conn->close();
?>
