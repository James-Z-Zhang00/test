import express from 'express'
import { createItem, deleteItem, getItems, updateItem } from '../controllers/test.controller.js'

const router = express.Router()

router.get("/", getItems)
router.post("/", createItem)
router.delete("/:id", deleteItem)
router.put("/:id", updateItem)

export default router