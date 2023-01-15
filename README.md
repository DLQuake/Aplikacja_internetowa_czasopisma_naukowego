# Aplikacja internetowa czasopisma naukowego
Temat pracy inżynierskiej polegający na stworzeniu aplikacji internetowej czasopisma naukowego

## Spis treści
 * [Krótki opis repozytorium](#krótki-opis-repozytorium)
 * [Dokumentacja](#dokumentacja)
 * [Technologie jakie zastaną użyte do pracy](#technologie-jake-zostaną-użyte-do-pracy)
 * [Koncepcja aplikacji](#koncepcja-aplikacji)
 * [Pobranie i klonowanie](#pobranie-i-klonowanie)

## Krótki opis repozytorium
W tym repozytorium powstała aplikacja internetowa czasopisma naukowego, która umożliwia wysyłanie publikacji przez autora, a następnie przechodzi przez proces recenzowania oraz redagowania oraz publikacji na stronie głównej.

Praca inżynierska jest robiona pod kierunkiem [dr hab. Aleksandra Denisiuka prof. UWM](http://wmii.uwm.edu.pl/~denisjuk/)

## Technologie jakie zostały użyte do pracy

- Front-end: [React.js](https://reactjs.org/)
- Back-end: [Express.js](http://expressjs.com/)
- Bazy danych: [MySQL](https://www.mysql.com/)
- UX/UI: [Figma](https://www.figma.com/file/AApCH9HVVk1C8e8Gfezebe/Aplikacja-internetowa-czasopisma-naukowego?node-id=0%3A1)

## Koncepcja aplikacji
Do wykonania był projekt aplikacji internetowej czasopisma naukowego.
Założenie aplikacji było takie, aby wyeliminowanie potrzeby wizyt w wydawnictwie, ulepszenie
procesu publikacji i jego maksymalne przyspieszenie. Obecnie wiedza w każdej
dziedzinie rozwija się bardzo szybko. Opóźnienia w publikacjach nie są więc
pożądane.
W tym celu powstaje właśnie ta aplikacja by rozwiązać przedstawiony problem

* Aktorzy
    * Autor
    * Recenzent
    * Redaktor
    * Użytkownik
    * Wydawnictwo

* Główne funkcjonalności
    * Autoryzacja użytkwonika
        * Zarejestruj się
        * Zaloguj się
    * Zarządzanie kontami użytkowników
    * Przeglądanie oraz czytanie publikacji
    * Dodanie publikacji
    * Aktualizacja publikacji
    * Usuniecie publikacji
    * Ocenienie publikacji – usługa pozwalająca na ocenienie publikacji przez Recenzenta.
        * Wypisanie uwag i błędów
        * Odesłanie do redaktora
    * Redagowanie publikacji – usługa pozwalająca na redagowanie publikacji przez Redaktora
        * Wysłanie publikacji do recenzji
        * Możliwość wysłania publikacji do wydawnictwa pod warunkiem poprawienia pracy
        * Brak zgody na opublikowanie.
        * Wysłanie publikacji do wydawnictwa
        * Opublikowanie publikacji

Reszta informacji znajduje się w dokumentacji w rozdziale [Dokumentacja](#dokumentacja)

## Dokumentacja
Dokumentacja początkowa znajduje się w pliku PDF pod tym linkiem -> [LINK](https://github.com/DLQuake/Aplikacja_internetowa_czasopisma_naukowego/blob/main/Dokumentacja/Pocz%C4%85tkowa/Dokumentacja_pocz%C4%85tkowa.pdf)

Dokumentacja końcowa jest w trakcie pisania.

W folderze dokumentacja znajdują sie także pliki Microsoft Word, które można pobrać.

## Pobranie i Klonowanie
Można pobrać repozytorium na dwa sposoby:

* ```
  git clone https://github.com/DLQuake/Aplikacja_internetowa_czasopisma_naukowego.git
  ```
* [Download ZIP](https://github.com/DLQuake/Aplikacja_internetowa_czasopisma_naukowego/archive/refs/heads/main.zip)
