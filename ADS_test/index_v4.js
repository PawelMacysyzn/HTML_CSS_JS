const ads = require('ads-client');
const readline = require('readline');

const client = new ads.Client({
    targetAmsNetId: '192.168.11.50.1.1',
    targetAdsPort: 851,
});

let running = true;

client.connect()
    .then(res => {
        console.log(`Connected to: ${res.targetAmsNetId}`);
        console.log(`Router assigned us AmsNetId: ${res.localAmsNetId} and port: ${res.localAdsPort}`);

        // Ctrl + C interrupt handling
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.on('SIGINT', () => {
            running = false;
            rl.close();
        });

        const readValue = () => {
            if (running) {
                client.readSymbol('MAIN.nIntToRead')
                    .then(res => {
                        console.log(`Value read: ${res.value}`);
                        setTimeout(readValue, 1000);  // Read every "value "ms
                    })
                    .catch(err => {
                        console.log('Something failed:', err);
                        running = false;
                    });
            } else {
                client.disconnect().then(() => {
                    console.log('Disconnected');
                });
            }
        };

        readValue();

    })
    .catch(err => {
        console.log('Something failed:', err);
    });
