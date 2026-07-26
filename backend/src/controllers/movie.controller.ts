/**
 * ----------------------------------------------------------------
 * AtlasStream Backend API
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Controlador para la administración de películas.
 * ----------------------------------------------------------------
 */

import { Request, Response } from "express";

import {
  createMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  getMovieBySlug,
  updateMovie,
} from "../services/movie.service";

/**
 * Obtiene todas las películas.
 */
export async function index(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const movies = await getAllMovies();

    return res.status(200).json({
      success: true,
      data: movies,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Error al obtener las películas.",
    });
  }
}

/**
 * Obtiene una película por su ID.
 */
export async function show(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const movie = await getMovieById(req.params.id);

    return res.status(200).json({
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

/**
 * Obtiene una película por su slug.
 */
export async function showBySlug(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const movie = await getMovieBySlug(req.params.slug);

    return res.status(200).json({
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

/**
 * Crea una nueva película.
 */
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

/**
 * Actualiza una película.
 */
export async function update(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const movie = await updateMovie(req.params.id, req.body);

    return res.status(200).json({
      success: true,
      data: movie,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "No se pudo actualizar la película.",
    });
  }
}

/**
 * Desactiva una película.
 */
export async function destroy(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    await deleteMovie(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Película desactivada correctamente.",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "No se pudo desactivar la película.",
    });
  }
}