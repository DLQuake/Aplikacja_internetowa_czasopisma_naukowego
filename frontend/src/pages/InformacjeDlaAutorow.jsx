import React from "react";
import NavbarHome from "../components/NavbarHome";

const InformacjeDlaAutorow = ({ children }) => {
    return (
        <React.Fragment>
            <NavbarHome />
            <section className="section has-background-success">
                <div class="content has-background-white p-6">
                    <h1>Informacje dla autorów</h1>
                    <p>Poniżej znajdują się informacje dla autorów których należy przestrzegać</p>
                    <h2>Wymagania</h2>
                    <p>Proszę przestrzegać tych ogólnych wymagań:</p>
                    <ul>
                        <li>Ponieważ artykuły podlegają procesowi podwójnej ślepej recenzji, prosimy o USUNIĘCIE NAZWISK I AFILIACJI AUTORÓW z przesłanej wersji artykułu (PDF). Możesz je dodać przed przesłaniem ostatecznej wersji.</li>
                        <li>Zapewnij wysoką jakość języka angielskiego (w razie potrzeby wykonaj korektę).</li>
                        <li>Zapewnij wysoką jakość grafiki (preferowana jest grafika wektorowa, tam gdzie jest to bezwzględnie konieczne stosuj dobrej jakości bitmapy).</li>
                        <li>Przestrzegać stylu LaTeX z przykładami najpóźniej po przyjęciu referatu. Dostępne są próbki w języku angielskim i polskim.</li>
                        <li>Bibliografię prosimy przygotować w stylu .BST zawartym w  pliku Styl LaTeX z przykładami . Prosimy o dołączenie plików .BIB do ostatecznego zgłoszenia.</li>
                        <li>Streszczenie nie powinno być dłuższe niż 150 słów.</li>
                        <li>Ostateczne zgłoszenie (po akceptacji) powinno stanowić archiwum ZIP zawierające wszystkie niezbędne źródła LaTeX, skompilowaną pracę oraz wypełnioną, podpisaną i zeskanowaną zgodę na publikację. i Dodatek. wypełnić według poniższego wzoru: Przykład wypełnienia załącznika. Załącznika nie trzeba drukować ani skanować, można go po prostu dodać do końcowego pliku ZIP.</li>
                        <li>Uprzejmie prosimy o przygotowanie ostatecznej wersji w jednym pliku LaTeX zamiast używania \input lub \include z innymi plikami. Pomoże nam to znacząco w procesie wydawniczym.</li>
                        <li>Po publikacji pamiętaj, aby cytować swoją pracę, używając pełnej nazwy czasopisma, np.: Imię, Nazwisko, „Tytuł Współpracy”, Informatyka, Tom(Numer), Wydawnictwo AGH, 2010</li>
                    </ul>
                    <h2>Plagiat</h2>
                    <p>
                        Przestrzegamy ścisłej procedury antyplagiatowej i nie przyjmujemy prac przygotowanych przez ghostwriterów (osobę zatrudnioną do przygotowania pracy) ani autorów gościnnych (współautorzy wymienieni wyłącznie z powodów honorowych). Takie działania są postrzegane jako wykroczenia i mogą być ścigane karnie.
                        <br />
                        <br />
                        Autorzy, którzy nie zastosują się do tych wytycznych (tj. zgłoszą plagiat) otrzymają zakaz publikowania w naszym czasopiśmie przez okres jednego roku. Ponadto o podjęciu przez nich próby opublikowania plagiatu w naszym czasopiśmie zostanie poinformowana instytucja zatrudniająca, stowarzyszenia naukowe i inne organizacje, do których mogą należeć tacy autorzy.
                        <br />
                        <br />
                        Postępując zgodnie z powyższą procedurą dokładamy wszelkich starań, aby Twoja praca nie została opublikowana równolegle z plagiatem lub inną publikowaną ponownie na ogólnie przyjętych zasadach.
                    </p>
                </div>
            </section>
        </React.Fragment>
    );
};

export default InformacjeDlaAutorow;
