const ads = require('ads-client')

const client = new ads.Client({
    targetAmsNetId: '192.168.11.50.1.1',
    targetAdsPort: 851,
})

client.connect()
    .then(res => {
        console.log(`Connected to: ${res.targetAmsNetId}`)
        console.log(`Router assigned us AmsNetId: ${res.localAmsNetId} and port: ${res.localAdsPort}`)

        return client.readSymbol('MAIN.nIntToRead')
    })
    .then(res => {
        console.log(`Value read: ${res.value}`)
        return client.disconnect()
    })
    .then(() => {
        console.log('Disconnected')
    })
    .catch(err => {
        console.log('Something failed:', err)
    })
