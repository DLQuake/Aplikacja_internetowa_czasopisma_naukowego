import React from "react";
import NavbarHome from "../components/NavbarHome";

const InformacjeDlaAutorow = ({ children }) => {
    return (
        <React.Fragment>
            <NavbarHome />
            <section className="section has-background-success">
                <div class="content has-background-white p-6">
                    <h1>Informacje dla autorów</h1>
                    <p>Poniżej znajdują się informacje dla autorów.</p>
                    <h2>Wymagania</h2>
                    <p>Proszę przestrzegać tych ogólnych wymagań:</p>
                    <ul>
                        <li>Oryginalność pracy: Praca musi być oryginalna i nie powinna być już opublikowana ani złożona do publikacji w innym czasopiśmie lub w innej formie.</li>
                        <li>Format: Praca powinna być przesłana w formacie PDF</li>
                        <li>Marginesy: Praca powinna mieć marginesy o szerokości minimum 2,5 cm.</li>
                        <li>Czcionka: Praca powinna być napisana w czcionce Times New Roman o rozmiarze 12 punktów.</li>
                        <li>Interlinia: Praca powinna mieć interlinię 1,5.</li>
                        <li>Tytuł: Praca powinna zawierać tytuł, imię i nazwisko autora/ów, afiliację oraz dane kontaktowe.</li>
                        <li>Abstrakt: Praca powinna zawierać abstrakt w języku angielskim, który powinien zawierać maksymalnie 250 słów i składać się z celu badania, metod, wyników i wniosków.</li>
                        <li>Słowa kluczowe: Praca powinna zawierać co najmniej trzy słowa kluczowe.</li>
                        <li>Numeracja stron: Praca powinna być ponumerowana.</li>
                        <li>Tabele i rysunki: Tabele i rysunki powinny być czytelne i muszą być oznaczone odpowiednimi numerami.</li>
                        <li>Literatura: Praca powinna zawierać odpowiednią bibliografię i powinna być przedstawiona w postaci listy nie numerowanej</li>
                        <li>Język: Praca powinna być napisana w języku polskim i przejrzana pod kątem błędów ortograficznych i interpunkcyjnych</li>
                    </ul>
                    <h2>Plagiat</h2>
                    <p>Przestrzegamy ścisłej procedury antyplagiatowej i nie przyjmujemy prac przygotowanych przez ghostwriterów (osobę zatrudnioną do przygotowania pracy) ani autorów gościnnych (współautorzy wymienieni wyłącznie z powodów honorowych). Takie działania są postrzegane jako wykroczenia i mogą być ścigane karnie.</p>
                    <p>Autorzy, którzy nie zastosują się do tych wytycznych (tj. zgłoszą plagiat) otrzymają zakaz publikowania w naszym czasopiśmie przez okres jednego roku. Ponadto o podjęciu przez nich próby opublikowania plagiatu w naszym czasopiśmie zostanie poinformowana instytucja zatrudniająca, stowarzyszenia naukowe i inne organizacje, do których mogą należeć tacy autorzy.</p>
                    <p>Postępując zgodnie z powyższą procedurą dokładamy wszelkich starań, aby Twoja praca nie została opublikowana równolegle z plagiatem lub inną publikowaną ponownie na ogólnie przyjętych zasadach.</p>
                </div>
            </section>
        </React.Fragment>
    );
};

export default InformacjeDlaAutorow;
