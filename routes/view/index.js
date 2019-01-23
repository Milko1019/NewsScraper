var express = require("express");
var router = express.Router();
// Requiring our Comment and Article models
var Note = require("../../models/Note");
var Headline = require("../../models/Headline");



module.exports =function(app){
    router.get("/", function(req, res){
        Headline.find({})
        .populate("notes")
        .exec(function(error, doc){
            if (error){
                console.log(error);
            }
            else {
                console.log("articles" + doc);
                res.render("index", {headlines: doc});
            }
        })
    })
}