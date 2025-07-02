import { generateNanoId } from "../utils/helper"

export const createShortUrl = async (req, res)=>{
    const {url} = req.body
    const short_url = generateNanoId(7);


    const newURL = new urlSchema({
        full_url: url,
        short_url: short_url,})
        newURL.save()
        res.send(nanoid(7))

}