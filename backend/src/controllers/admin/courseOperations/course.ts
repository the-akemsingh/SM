import { Request, Response } from "express";
import prisma from "../../../PrismaClient";

export const createCourseController = async (req: Request, res: Response) => {
  try {
    const { title, description, price, imageUrl, categoryId } = req.body; 

    if (!title || !description || !price || !categoryId) {
      res.status(400).json({ error: "Invalid input data" });
      return;
    }

    const existingCategory = await prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!existingCategory) {
      res.status(400).json({ error: "Invalid category ID" });
      return;
    }

    const course = await prisma.course.create({
      data: {
        title,
        description,
        price: parseFloat(price),
        imageUrl,
        category: {
          connect: { id: categoryId },
        },        
      },
    });

    if (!course) {
      res.status(400).json({ error: "Failed to create course" });
      return;
    }

    res.status(201).json(course);
  } catch (error) {
    console.error("Create Course Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const updateCourseByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ error: "Course ID is required" });
      return;
    }

    const existingCourse = await prisma.course.findUnique({
      where: { id: parseInt(id) },
    });
    if (!existingCourse) {
      res.status(404).json({ error: "Course not found" });
      return;
    }

    const { title, description, price, imageUrl, categoryId } = req.body;

    // Check if at least one field is provided
    if (!title && !description && !price && !imageUrl && !categoryId) {
      res
        .status(400)
        .json({ error: "At least one field is required for update" });
      return;
    }

    // update data object with only provided fields
    const updateData: any = {};
    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (price) updateData.price = price;
    if (imageUrl) updateData.imageUrl = imageUrl;
    if (categoryId) updateData.categoryId = categoryId;


    const updatedCourse = await prisma.course.update({
      where: { id: Number(id) },
      data: updateData,
    });

    if (!updatedCourse) {
      res.status(400).json({ error: "Failed to update course" });
      return;
    }
  
    res.status(200).json(updatedCourse);

  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteCourseByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ error: "Course ID is required" });
      return;
    } 
    
    const existingCourse = await prisma.course.findUnique({
      where: { id: parseInt(id) },
    });
    if (!existingCourse) {
      res.status(404).json({ error: "Course not found" });
      return;
    }

    await prisma.course.delete({  
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: "Course deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
