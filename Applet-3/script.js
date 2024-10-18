
        let logs = [];

        const logButton = document.getElementById('logButton');
        const resetButton = document.getElementById('resetButton');
        const logDisplay = document.getElementById('logDisplay');
        const countLabel = document.getElementById('countLabel');

        logButton.addEventListener('click', function() {
            const logEntry = new Date().toLocaleString();
            logs.push(logEntry);
            logDisplay.textContent += logEntry + '\n';
            countLabel.textContent = 'Total Logs: ' + logs.length;
        });

        resetButton.addEventListener('click', function() {
            logs = []; 
            logDisplay.textContent = ''; 
            countLabel.textContent = 'Total Logs: 0'; 
        });
   