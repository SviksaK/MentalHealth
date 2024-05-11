import "./style.css";


const Header = () => {

    return (
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
            <em> Garīgās veselības krīze jauniešu vidū</em>
            </strong>
          </h1>
          <div className="header__text">
            <p>Šeit jums ir iespeja uzzināt par problēmas un risinājumi</p>
          </div>
        </div>
      </header>
    );
}

export default Header;