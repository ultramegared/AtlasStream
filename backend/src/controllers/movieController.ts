import { Request, Response } from "express";
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../services/movieService";

export async function index(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const movies = await getAllMovies();

    return res.json({
      success: true,
      data: movies,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Error al obtener películas.",
    });
  }
}

export async function show(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const movie = await getMovieById(req.params.id);

    return res.json({
      success: true,
      data: movie,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Película no encontrada.",
    });
  }
}

export async function store(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const movie = await createMovie(req.body);

    return res.status(201).json({
      success: true,
      data: movie,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "No se pudo crear la película.",
    });
  }
}

export async function update(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const movie = await updateMovie(req.params.id, req.body);

    return res.json({
      success: true,
      data: movie,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "No se pudo actualizar.",
    });
  }
}

export async function destroy(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    await deleteMovie(req.params.id);

    return res.json({
      success: true,
      message: "Película eliminada correctamente.",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "No se pudo eliminar.",
    });
  }
}