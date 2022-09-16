const axios = require('axios')
const express = require('express')
const cheerio = require('cheerio')
const { compareDocumentPosition } = require('domutils')
const e = require('express')
const PORT = 8877


const app = express()


const url = 'https://counterstrike.fandom.com/wiki/Counter-Strike:_Global_Offensive'
axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('.wikia-gallery-item', html).each(function () {
            const title = $(this).text()
            const url =$(this).find('a').attr('href')
            // console.log(url)
            articles.push({
                title,
                url
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))


app.listen(PORT, () => console.log(`Server is starting at ${PORT}`))