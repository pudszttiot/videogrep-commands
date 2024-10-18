function searchCommands() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const commandItems = document.querySelectorAll('.command-item');

    commandItems.forEach(item => {
        const commandText = item.querySelector('.command').textContent.toLowerCase();
        item.style.display = commandText.includes(input) ? 'flex' : 'none';
    });
}

function copyCommand(command) {
    navigator.clipboard.writeText(command)
        .then(() => {
            alert('Command copied to clipboard!');
        })
        .catch(err => {
            console.error('Error copying command: ', err);
        });
}
