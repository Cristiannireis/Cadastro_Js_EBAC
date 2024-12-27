document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const messageDiv = document.getElementById('message');

    // Validação do nome: deve conter apenas letras e espaços
    const nameRegex = /^[A-Za-zÀ-ÿ\s]+$/; // Aceita letras e espaços
    if (!nameRegex.test(name)) {
        messageDiv.textContent = 'O nome deve conter apenas letras.';
        messageDiv.style.color = 'red';
        return;
    }

    // Validação do telefone: deve conter apenas números e ter pelo menos 10 dígitos
    const phoneRegex = /^\+?[0-9]{10,15}$/; // Aceita números e um possível sinal de +
    if (!phoneRegex.test(phone)) {
        messageDiv.textContent = 'O telefone deve conter apenas números e ter entre 10 a 15 dígitos.';
        messageDiv.style.color = 'red';
        return;
    }

    // Se todas as validações passarem
    messageDiv.textContent = 'Cadastro realizado com sucesso!';
    messageDiv.style.color = 'green';
    
    // Aqui você pode adicionar a lógica para enviar os dados para um servidor, se necessário
});