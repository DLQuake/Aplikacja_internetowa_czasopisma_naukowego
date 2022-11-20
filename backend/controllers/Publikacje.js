import Publikacje from "../models/PublikacjeModel.js"
import Uzytkownik from "../models/UzytkownikModel.js"

export const getPublikacje = async (req, res) => {
    try {
        let response;
        response = await Publikacje.findAll({
            include: [{
                model: Uzytkownik,
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getPublikacjeById = async (req, res) => {

}

export const createPublikacje = async (req, res) => {
    const { tytul, opis, plik, url, uzytkownikId } = req.body;
    try {
        await Publikacje.create({
            tytul: tytul,
            opis: opis,
            plik: plik,
            url: url,
            uzytkownikId: uzytkownikId
        });
        res.status(201).json({ msg: "Publikacja dodana pomyślnie" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const updatePublikacje = async (req, res) => {

}

export const deletePublikacje = async (req, res) => {

}