document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (!form) return;

    function showError(input, message) {
        const field = input.closest('.field');
        if (!field) return;

        // remove old error
        const existingError = field.querySelector('.help.is-danger');
        if (existingError) existingError.remove();

        // highlight target field
        input.classList.add('is-danger');

        // print the error text
        const help = document.createElement('p');
        help.className = 'help is-danger';
        help.textContent = message;
        field.appendChild(help);
    }

    function clearError(input) {
        const field = input.closest('.field');
        if (!field) return;

        input.classList.remove('is-danger');
        const error = field.querySelector('.help.is-danger');
        if (error) error.remove();
    }

    // check email with regex
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // prevent default form send

        // remove all previous errors
        document.querySelectorAll('.field .help.is-danger').forEach(el => el.remove());
        document.querySelectorAll('.input.is-danger, .textarea.is-danger, .select.is-danger').forEach(el => el.classList.remove('is-danger'));

        let hasErrors = false;

        // get fields
        const nameInput = form.querySelector('input[type="text"]');
        const emailInput = form.querySelector('input[type="email"]');
        const select = form.querySelector('select');
        const messageTextarea = form.querySelector('textarea');
        const checkbox = form.querySelector('input[type="checkbox"]');

        // name validation
        if (!nameInput.value.trim()) {
            showError(nameInput, 'Пожалуйста, введите имя');
            hasErrors = true;
        } else {
            clearError(nameInput);
        }

        // email validation
        if (!emailInput.value.trim()) {
            showError(emailInput, 'Пожалуйста, введите email');
            hasErrors = true;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Введите корректный email (например, name@domain.com)');
            hasErrors = true;
        } else {
            clearError(emailInput);
        }

        clearError(select); // remove old errors from theme selector

        // message validation
        if (!messageTextarea.value.trim()) {
            showError(messageTextarea, 'Пожалуйста, введите сообщение');
            hasErrors = true;
        } else {
            clearError(messageTextarea);
        }

        // checkbox validation
        if (!checkbox.checked) {
            const field = checkbox.closest('.field');
            if (field) {
                const existing = field.querySelector('.help.is-danger');
                if (!existing) {
                    const help = document.createElement('p');
                    help.className = 'help is-danger';
                    help.textContent = 'Необходимо согласие на обработку персональных данных';
                    field.appendChild(help);
                }
            }
            hasErrors = true;
        } else {
            const field = checkbox.closest('.field');
            if (field) {
                const error = field.querySelector('.help.is-danger');
                if (error) error.remove();
            }
        }

        if (!hasErrors) {
            alert('Форма валидна! (Отправка пока не настроена)');
            // form.submit(); // will not work yet
        }
    });
});