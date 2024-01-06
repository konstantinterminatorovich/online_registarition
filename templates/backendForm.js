<form id="backendForm" method="post">
    <h1>Backend</h1>
    <input id="backendInput" type="text">
    <button type="submit">Submit</button>
</form>

<script>
    document.getElementById("backendForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Предотвращаем отправку формы

        var input = document.getElementById("backendInput");
        var text = input.value;

        // Выводим текст после кнопки
        var output = document.createElement("p");
        output.textContent = text;
        document.getElementById("backendForm").appendChild(output);

        // Очищаем поле ввода
        input.value = "";
    });
</script>