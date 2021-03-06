import React from 'react';
import { Link } from "react-router-dom";
import "./NotFound.css";
import ImgNotFound from '../../assets/not-found.jpg';
import { AuthenticatedLayout as Layout } from "../_layout/authenticated/index";

export default function NotFound() {
  return (
    <Layout>
      <div className="container">
        <h1 className="notFound-title">404</h1>
        <div className='notFound-img-container'>
          <img src={ImgNotFound} alt='Not Found' className='notFound-img' />
        </div>
        <p className="info">Página no encontrada</p>
        <p className="info">Volver al <Link to="/">Inicio</Link></p>
      </div>
    </Layout>
  )
}