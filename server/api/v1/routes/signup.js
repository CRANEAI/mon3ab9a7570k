const router = require("express").Router()
const passport = require("../auth")
const { db } = require("../../../utils")

//----------------------------------------------------------------------------------------------------------
//Endpoints
//----------------------------------------------------------------------------------------------------------

/**
 * @swagger
 * api/v1/signup/sign_in:
 *   post:
 *     tags:
 *       - name: sign_in
 *     description: sign_in
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: it works!
 */
router.post(
  "/sign_in",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    sign_in().then(result => {
      res.status(200).send(result)
    })
  }
)

/**
 * @swagger
 * api/v1/signup/sign_in:
 *   post:
 *     tags:
 *       - name: sign_in
 *     description: sign_in
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: it works!
 */
router.post(
  "/sign_in",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    sign_in().then(result => {
      res.status(200).send(result)
    })
  }
)

/**
 * @swagger
 * api/v1/signup/sign_up:
 *   post:
 *     tags:
 *       - name: sign_up
 *     description: sign_up
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: it works!
 */
router.post(
  "/sign_up",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    sign_up().then(result => {
      res.status(200).send(result)
    })
  }
)

/**
 * @swagger
 * sign_in():
 *
 */
sign_in = () => {
  return new Promise((resolve, reject) => {
    /* TODO - write sign_in function */
    resolve()

    /* TODO - handle sign_in error
                        reject({message: "error"})
                    */
  })
}

/**
 * @swagger
 * sign_in():
 *
 */
sign_in = () => {
  return new Promise((resolve, reject) => {
    /* TODO - write sign_in function */
    resolve()

    /* TODO - handle sign_in error
                        reject({message: "error"})
                    */
  })
}

/**
 * @swagger
 * sign_up():
 *
 */
sign_up = () => {
  return new Promise((resolve, reject) => {
    /* TODO - write sign_up function */
    resolve()

    /* TODO - handle sign_up error
                        reject({message: "error"})
                    */
  })
}
