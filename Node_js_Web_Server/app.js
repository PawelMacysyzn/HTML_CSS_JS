// ABY URUCHOMIC nalezy wprowadzić komendę:
// node app.js


// Importowanie modułów http i fs (file system)
const http = require('http');
const fs = require('fs');

// Określenie numeru portu, na którym serwer będzie nasłuchiwać
const port = 3001;

// Tworzenie serwera HTTP
const server = http.createServer(function (req, res) {

    // Ustawianie nagłówka odpowiedzi na status 200 i typ zawartości 'text/html'
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Odczyt pliku 'index.html'
    fs.readFile('index.html', function (error, data) {
        if (error) {
            res.writeHead(404); // Ustawianie statusu 404 w razie błędu
            res.write('Error: File Not Found'); // Wysłanie komunikatu o błędzie
        } else {
            res.write(data); // Wysłanie zawartości pliku 'index.html'
        }
        res.end(); // Zakończenie odpowiedzi
    });

    // Ta część została zakomentowana, ponieważ zwracałaby "Hello Node" na każde żądanie
    // res.write("Hello Node");
    // res.end();
});

// Uruchamianie serwera na określonym porcie
server.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong', error); // Komunikat o błędzie, jeśli wystąpił
    } else {
        console.log('Server is listening on port ' + port); // Komunikat o uruchomieniu serwera
    }
});
