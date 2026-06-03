$(document).ready(function() {
    // Ефект jQuery для плавної появи блоків
    $('.news-card, .list-group-item, .card').hide().fadeIn(1000);

    // Ініціалізація jQuery UI Draggable для інтерактивного перетягування новин
    $( ".news-card" ).draggable({
        revert: "invalid", 
        cursor: "move"
    });

    console.log("Портал Полтавської політехніки успішно запущено. Поточний рік: 2026.");
});