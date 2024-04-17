// homeController.js
"use strict";

/**
 * Listing 10.2
 */
exports.respondWithName1 = (req, res) => {
    res.render('index');
}

/**
 * Listing 10.3
 */
exports.getHome = (req, res) => {
    res.render('index', {
        name: "CMS",
        people: {
            usa: {
                einstein: "Albert eistein",
                musk: "Elon musk",
                jobs: "Steve jobs"
            },
            korea: {
                psy: "싸이다!",
                kim: "김예수",
            },
            mexico: {
                jesus: "Jesus Alvarez"
            }
        }
    });
};

exports.respondWithName = (req, res) => {
    let paramsName = req.params.myName;
    res.render('index', {
        name: paramsName,
        people: {
            usa: {
                einstein: "Albert eistein",
                musk: "Elon musk",
                jobs: "Steve jobs"
            },
            korea: {
                psy: "싸이다!",
                kim: "김예수",
            },
            mexico: {
                jesus: "Jesus Alvarez"
            }
        }
    });
};
