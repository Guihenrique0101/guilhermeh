<?php
$target_dir = "./"; // Diretório atual
$target_file = $target_dir . basename($_FILES["file"]["name"]);

if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
    echo "Arquivo enviado com sucesso!";
} else {
    echo "Erro ao enviar o arquivo.";
}
