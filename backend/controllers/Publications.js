import Publications from "../models/PublicationModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";
import path from "path";
import fs from "fs";

export const ShowPublicationsOnHomePage = async (req, res) => {
    try {
        const response = await Publications.findAll({
            attributes: ['uuid', 'status', 'tytul', 'opis', 'plik', 'url'],
            where: {
                status: "Opublikowany",
            },
            include: [{
                model: User,
                attributes: ['uuid', 'imie', 'nazwisko', 'email', 'login', 'role']
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const ShowPublicationsOnHomePageById = async (req, res) => {
    try {
        const publication = await Publications.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!publication) return res.status(404).json({ msg: "Nie znaleziono publikacji" });
        const response = await Publications.findOne({
            attributes: ['uuid', 'status', 'tytul', 'opis', 'plik', 'url'],
            where: {
                status: "Opublikowany",
                id: publication.id
            },
            include: [{
                model: User,
                attributes: ['uuid', 'imie', 'nazwisko', 'email', 'login', 'role']
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getPublications = async (req, res) => {
    try {
        let response;
        if (req.role === "wydawnictwo") {
            response = await Publications.findAll({
                attributes: ['uuid', 'status', 'tytul', 'opis', 'plik', 'url', "uwagi"],
                where: {
                    status: {
                        [Op.or]: ["Do publikacji", "Opublikowany"]
                    }
                },
                include: [{
                    model: User,
                    attributes: ['uuid', 'imie', 'nazwisko', 'email', 'login', 'role']
                }]
            });
        } else if (req.role === "redaktor") {
            response = await Publications.findAll({
                attributes: ['uuid', 'status', 'tytul', 'opis', 'plik', 'url', "uwagi"],
                where: {
                    status: "Wysłany do redaktora",
                },
                include: [{
                    model: User,
                    attributes: ['uuid', 'imie', 'nazwisko', 'email', 'login', 'role']
                }]
            });
        } else if (req.role === "recenzent") {
            response = await Publications.findAll({
                attributes: ['uuid', 'status', 'tytul', 'opis', 'plik', 'url', "uwagi"],
                where: {
                    status: {
                        [Op.or]: ["Wysłany do recenzji", "Odesłany do Autora"]
                    }
                },
                include: [{
                    model: User,
                    attributes: ['uuid', 'imie', 'nazwisko', 'email', 'login', 'role']
                }]
            });
        } else {
            response = await Publications.findAll({
                attributes: ['uuid', 'status', 'tytul', 'opis', 'plik', 'url', "uwagi"],
                where: {
                    userId: req.userId
                },
                include: [{
                    model: User,
                    attributes: ['uuid', 'imie', 'nazwisko', 'email', 'login', 'role']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getPublicationById = async (req, res) => {
    try {
        const publication = await Publications.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!publication) return res.status(404).json({ msg: "Nie znaleziono publikacji" });
        let response;
        response = await Publications.findOne({
            attributes: ['uuid', 'status', 'tytul', 'opis', 'plik', 'url', "uwagi"],
            where: {
                id: publication.id
            },
            include: [{
                model: User,
                attributes: ['uuid', 'imie', 'nazwisko', 'email', 'login', 'role']
            }]
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createPublication = (req, res) => {
    if (req.files === null) return res.status(400).json({ msg: "Brak załączonego pliku" });
    const name = req.body.title
    const { opis } = req.body;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/publications/${fileName}`;
    const allowedType = ['.pdf'];

    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Nie poprawny radzaj pliku" });
    if (fileSize > 5000000) return res.status(422).json({ msg: "Rozmiar pliku musi być mniejszy niż 5 MB" });

    file.mv(`./public/publications/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });
        try {
            await Publications.create({
                status: "Wysłany do recenzji",
                tytul: name,
                opis: opis,
                plik: fileName,
                url: url,
                userId: req.userId,
                uwagi: "Wypełnia recenzent"
            });
            res.status(201).json({ msg: "Publikacja dodana poprawnie" });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    })
}

export const updatePublication = async (req, res) => {
    const publication = await Publications.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!publication) return res.status(404).json({ msg: "Brak danych" });

    let fileName = "";
    if (req.files === null) {
        fileName = publication.plik;
    } else {
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.pdf'];

        if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Nie poprawny radzaj pliku" });
        if (fileSize > 5000000) return res.status(422).json({ msg: "Rozmiar pliku musi być mniejszy niż 5 MB" });

        const filepath = `./public/publications/${publication.plik}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/publications/${fileName}`, (err) => {
            if (err) return res.status(500).json({ msg: err.message });
        });
    }

    const name = req.body.title;
    const { status, opis, uwagi } = req.body;
    const url = `${req.protocol}://${req.get("host")}/publications/${fileName}`;

    try {
        await Publications.update({status: status, tytul: name, opis: opis, plik: fileName, url: url, uwagi: uwagi}, {
            where: {
                id: publication.id
            }
        });
        res.status(200).json({ msg: "Dane publikacji zaktualizowane" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const deletePublication = async (req, res) => {
    const publication = await Publications.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!publication) return res.status(404).json({ msg: "Brak danych" });
    try {
        const filepath = `./public/publications/${publication.plik}`;
        fs.unlinkSync(filepath);
        await Publications.destroy({
            where: {
                id: publication.id
            }
        });
        res.status(200).json({ msg: "Publikacja usunięta poprawnie" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}