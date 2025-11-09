document.addEventListener('DOMContentLoaded', () => {
    const loveForm = document.getElementById('love-form');
    const questionScreen = document.getElementById('question-screen');
    const messageScreenHappy = document.getElementById('message-screen-happy');
    const messageScreenSad = document.getElementById('message-screen-sad');
    const messageScreenAngry = document.getElementById('message-screen-angry');

    loveForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        // Vérifie quelle option a été sélectionnée
        const selectedAnswer = document.querySelector('input[name="love_answer"]:checked');
        let messageScreen;

        if (selectedAnswer) {
            switch (selectedAnswer.value) {
                case 'opt1':
                case 'opt2':
                case 'opt3':
                    messageScreen = messageScreenHappy;
                    break;
                case 'opt4':
                    messageScreen = messageScreenSad;
                    break;
                case 'opt5':
                    messageScreen = messageScreenAngry;
                    break;
                default:
                    messageScreen = messageScreenHappy; // Valeur par défaut
            }
        } else {
            alert('Hey choisis ta réponse, tu te prends pour qui ??!');
            return;
        }

        // Masque l'écran de la question
        questionScreen.classList.add('hidden');

        // Affiche l'écran du message
        messageScreen.classList.remove('hidden');
    });
});