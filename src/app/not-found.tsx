import Link from "next/link";

export const metadata = {
  title: "404 || Voiture - Automotive & Car Dealer NextJS Template",
};

const NotFound = () => {
  return (
    <section className="our-error bgc-f9">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 text-center">
            <div className="error_page footer_apps_widget">
              <h3 className="subtitle">Página no encontrada</h3>
              <div className="erro_code">
                <h2>
                  4<span className="text-thm">0</span>4
                </h2>
              </div>
            </div>
            <Link className="btn_error btn-thm" href="/">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
