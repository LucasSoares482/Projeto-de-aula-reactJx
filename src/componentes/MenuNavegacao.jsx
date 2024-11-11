import { Link } from 'react-router-dom';
import React from 'react';

const MenuNavegacao = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Posts</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Página Principal</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/novo-post">Criar Post</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/action1">Action</Link></li>
                <li><Link className="dropdown-item" to="/action2">Another action</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/action3">Something else here</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled Link</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success bg-danger" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default MenuNavegacao;
