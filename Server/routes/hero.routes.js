const {Router} = require('express')

const Hero = require('../models/hero')
const router = Router()
const config = require('config')
router.post('/create', async (req, res) => {
    try {
        const {nickname, real_name, origin_descriptions, superpowers, catch_phrase, images} = req.body

        const hero = new Hero({
            nickname, real_name, origin_descriptions, superpowers, catch_phrase, images
        })
        await hero.save()

        res.status(201).json({message: "Superhero has been added"})
    } catch (e) {
        res.status(500).json({message: "Oops, try again"})
    }
})

router.post('/edit', async (req, res) => {
    try {
        const {real_name, origin_descriptions, superpowers, catch_phrase, images} = req.body
        const hero = await Hero.findOne({_id: req.body.id})
        hero.real_name = real_name
        hero.origin_descriptions = origin_descriptions
        hero.superpowers = superpowers
        hero.catch_phrase = catch_phrase
        hero.images = images

        await hero.save();

        res.status(201).json({message: 'Superhero has been changed', hero})

    } catch (e) {
        res.status(500).json({message: "Oops, try again"})
    }
})
router.post('/delete', async (req, res) => {
    try {
        await Hero.deleteOne({_id: req.body.id})
        res.status(201).json({message: 'Superhero has been deleted'})

    } catch (e) {
        res.status(500).json({message: "Oops, try again"})
    }
})
router.post('/get', async (req, res) => {
    try {
        const {page} = req.body;
        let heroes = await Hero.find({})
        const count = await Hero.countDocuments({})
        heroes = heroes.filter((_, index) => index < page * 5 && index >= (page - 1) * 5)


        res.status(201).json({message: 'Superheros have been forwarded', heroes, count})
    } catch (e) {
        res.status(500).json({message: "Oops, try again"})
    }
})
router.post('/find', async (req, res) => {
    try {
        const hero = await Hero.findOne({_id: req.body.id});

        res.status(201).json({message: 'Superheros has been forwarded', hero})
    } catch (e) {
        res.status(500).json({message: "Oops, try again"})
    }
})


module.exports = router