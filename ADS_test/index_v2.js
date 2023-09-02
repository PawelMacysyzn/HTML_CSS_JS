const ads = require('ads-client');
const readline = require('readline');

const client = new ads.Client({
    targetAmsNetId: '192.168.11.50.1.1',
    targetAdsPort: 851,
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

client.connect()
    .then(res => {
        console.log(`Connected to: ${res.targetAmsNetId}`);
        console.log(`Router assigned us AmsNetId: ${res.localAmsNetId} and port: ${res.localAdsPort}`);

        const readValue = () => {
            client.readSymbol('MAIN.nIntToRead')
                .then(res => {
                    console.log(`Value read: ${res.value}`);
                    rl.question('Press Enter to read again, or type "exit" to stop: ', answer => {
                        if (answer.toLowerCase() === 'exit') {
                            client.disconnect().then(() => {
                                console.log('Disconnected');
                                rl.close();
                            });
                        } else {
                            readValue();
                        }
                    });
                })
                .catch(err => {
                    console.log('Something failed:', err);
                    rl.close();
                });
        };

        readValue();
    })
    .catch(err => {
        console.log('Something failed:', err);
        rl.close();
    });
