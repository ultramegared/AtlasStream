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
 * Controlador para la gestión de series.
 * ----------------------------------------------------------------
 */

import { Request, Response } from "express";

import {
  getAllSeries,
  getSeriesById,
  getSeriesBySlug,
  getFeaturedSeries,
  getTrendingSeries,
  getLatestSeries,
  getRecommendedSeries,
  createSeries,
  updateSeries,
  deleteSeries,
} from "../services/series.service";

/**
 * Obtiene todas las series.
 */
export async function index(req: Request, res: Response) {
  try {
    const series = await getAllSeries();
    res.json(series);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las series.",
    });
  }
}

/**
 * Obtiene una serie por ID.
 */
export async function show(req: Request, res: Response) {
  try {
    const serie = await getSeriesById(req.params.id);
    res.json(serie);
  } catch (error) {
    res.status(404).json({
      message: "Serie no encontrada.",
    });
  }
}

/**
 * Obtiene una serie por slug.
 */
export async function showBySlug(req: Request, res: Response) {
  try {
    const serie = await getSeriesBySlug(req.params.slug);
    res.json(serie);
  } catch (error) {
    res.status(404).json({
      message: "Serie no encontrada.",
    });
  }
}

/**
 * Obtiene las series destacadas.
 */
export async function featured(req: Request, res: Response) {
  try {
    const series = await getFeaturedSeries();
    res.json(series);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las series destacadas.",
    });
  }
}

/**
 * Obtiene las series en tendencia.
 */
export async function trending(req: Request, res: Response) {
  try {
    const series = await getTrendingSeries();
    res.json(series);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las series en tendencia.",
    });
  }
}

/**
 * Obtiene las últimas series.
 */
export async function latest(req: Request, res: Response) {
  try {
    const series = await getLatestSeries();
    res.json(series);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las últimas series.",
    });
  }
}

/**
 * Obtiene las series recomendadas.
 */
export async function recommended(req: Request, res: Response) {
  try {
    const series = await getRecommendedSeries();
    res.json(series);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las series recomendadas.",
    });
  }
}

/**
 * Crea una nueva serie.
 */
export async function store(req: Request, res: Response) {
  try {
    const serie = await createSeries(req.body);
    res.status(201).json(serie);
  } catch (error) {
    res.status(500).json({
      message: "Error al crear la serie.",
    });
  }
}

/**
 * Actualiza una serie.
 */
export async function update(req: Request, res: Response) {
  try {
    const serie = await updateSeries(req.params.id, req.body);
    res.json(serie);
  } catch (error) {
    res.status(404).json({
      message: "Serie no encontrada.",
    });
  }
}

/**
 * Elimina (desactiva) una serie.
 */
export async function destroy(req: Request, res: Response) {
  try {
    await deleteSeries(req.params.id);

    res.json({
      message: "Serie eliminada correctamente.",
    });
  } catch (error) {
    res.status(404).json({
      message: "Serie no encontrada.",
    });
  }
}