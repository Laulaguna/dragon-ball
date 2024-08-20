
const Characters = require("../models/characters.model");

//http://localhost:3011/characters?pag=5&limit=10
const getAllCharacters = async (req, res) => {
    try {
        let pag = parseInt(req.query.pag)
        let limit = parseInt(req.query.limit)
        const numCharacters = await Characters.countDocuments()
        pag = !isNaN(pag) ? pag : 1
        limit = !isNaN(limit) ? limit : 5;
        limit = limit > 10 ? 10 : limit <= 0 ? 5 : limit
        console.log(pag, limit)

        let numPage = Math.ceil(numCharacters / limit)




        //console.log(numPage)

        if (pag > numPage) {
            pag = numPage;
        }
        if (pag < 1) {
            pag = 1
        }
        // pag=3;
        // limit = 5
        // 15 -->pagina 3
        /*  if (limit >= 10) {
             limit = 10;
         }
         if (limit <= 0) {
             limit = 5
         } */
        const allCharacters = await Characters.find().skip((pag - 1) * limit).limit(limit)
        res.json({
            previewPage: pag === 1 ? null : pag - 1,
            nextPage: numPage >= pag + 1 ? pag + 1 : null,
            quantityPage: allCharacters.length,
            data: allCharacters

        })
        console.log(numPage)


    } catch (error) {

    }
}

module.exports = { getAllCharacters }