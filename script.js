document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    container.classList.add('show');

    const inputs = document.querySelectorAll('.input-group input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transition = 'transform 0.3s ease';
            input.parentElement.style.transform = 'translateY(-3px)';
        });

        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.parentElement.style.transform = 'translateY(0)';
            }
        });
    });

    // Добавляем обработчик события mousemove
    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const containerRect = container.getBoundingClientRect();

        // Проверяем, находится ли мышь в пределах контейнера
        if (mouseX > containerRect.left && mouseX < containerRect.right &&
            mouseY > containerRect.top && mouseY < containerRect.bottom) {
            // Генерируем случайные координаты для перемещения контейнера
            const randomX = Math.random() * (window.innerWidth - containerRect.width);
            const randomY = Math.random() * (window.innerHeight - containerRect.height);

            // Перемещаем контейнер
            container.style.position = 'absolute'; // Убедитесь, что контейнер имеет абсолютное позиционирование
            container.style.left = `${randomX}px`;
            container.style.top = `${randomY}px`;
        }
    });
});