import express from "express";
import {  getCategoryByIdController, getCoursesByCategoryIdController, getParentCategoriesController, getSubcategoriesController } from "../controllers/category/categoryController";


const categoryRouter = express.Router();

//route to get all parent categories
categoryRouter.get("/", getParentCategoriesController);

//route to get category by id
categoryRouter.get("/:id", getCategoryByIdController);

//route to get subcategories of a category
categoryRouter.get("/:id/subcategories", getSubcategoriesController);

//route to get courses of a sub-category
categoryRouter.get("/:id/courses", getCoursesByCategoryIdController);

export default categoryRouter;
