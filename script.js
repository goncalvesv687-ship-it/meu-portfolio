// Função responsável por validar o formulário de contato
function validarFormulario() {
    // Captura os valores digitados nos campos
    // trim() remove espaços extras no início e fim
    const nome = document.getElementById('contato-nome').value.trim();
    const email = document.getElementById('contato-email').value.trim();
    const mensagem = document.getElementById('contato-mensagem').value.trim();
    // Seleciona o elemento responsável por mostrar mensagens ao usuário
    const status = document.getElementById('form-status');
    // Limpa mensagens anteriores antes de validar novamente
    status.textContent = '';
    status.className = 'form-status';
    // Verifica se algum campo está vazio
    if (!nome || !email || !mensagem) {
        status.textContent = 'Por favor, preencha todos os campos antes de enviar.';
        status.classList.add('error');
        return false;
    }

    // Verifica se o email possui formato válido
    if (!validarEmail(email)) {
        status.textContent = 'Digite um email válido.';
        status.classList.add('error');
        return false;
    }
    // Exibe mensagem de sucesso após validação correta
    status.textContent = 'Mensagem enviada com sucesso! Em breve entrarei em contato.';
     // Adiciona classe CSS de sucesso para estilizar a mensagem
    status.classList.add('success');
    // Limpa os campos do formulário após o envio
    document.getElementById('contato-form').reset();
    // Impede o recarregamento da página 
    return false;
}
// Função responsável por validar o formato do email
function validarEmail(email) {
    return email.includes('@') && email.includes('.') && !email.includes(' ');
}