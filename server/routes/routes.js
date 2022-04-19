const Express = require('express')
const Router = Express.Router()
const Lodash = require('lodash')

const {
    fetchBlog,
    createBlog,
    editBlog,
    deleteBlog
} = require('../controller/blogpost')

//GET request
Router.get('/', async (req, res) => {
    try {
        if(!Lodash.isUndefined(res.locals.status)) {
            res.locals.status = {
                content: await fetchBlog(res.locals.query),
                code: 200 
            }
        }
    } catch(err) {
        res.locals.status = {
            content: {
                message: Lodash.isUndefined(error.statusCode)
                    ? 'The server has encountered an unexpected internal error.'
                    : error.message
            },
            code: Lodash.isUndefined(error.statusCode) ? 500 : error.statusCode,
            error: error
        }
    }
})