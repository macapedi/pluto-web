import "./DashboardPage.scss";
import * as pluto from 'plutolib'  ;

function DashboardPage() {
  pluto.container('test','horizontal', 'center', 'blue');
  pluto.h1('test h1', 'test', 'testh1', 'black');

  return (
    <div className="dashboard">
      <h1>This is Dashboard Page</h1>
      <section className='main'>
        <div className='code-container'>
          <h2 className='code-container__title'>Code of the Site</h2>
          <div className='code-container__code'>
            test

          </div>
        </div>
        <div className='preview-container'>
          <h2 className='preview-container__title'>Preview of the Site</h2>
          <div className='preview-container__html'>
            test
          </div>
        </div>

      </section>
      <section className='input'>
        <div className='input__main'>
          <div className='input__main-buttons'>
            <h3 className='input__main-title'>Pick a Component</h3>
            <div className='input__main-buttons-list'>
              <button className='input__main-buttons-list-button'>Title</button>
              <button className='input__main-buttons-list-button'>Navbar</button>
              <button className='input__main-buttons-list-button'>Button</button>
              <button className='input__main-buttons-list-button'>Link</button>
              <br></br>
              <button className='input__main-buttons-list-button'>Section</button>
              <button className='input__main-buttons-list-button'>Image</button>
              <button className='input__main-buttons-list-button'>Form</button>
              <button className='input__main-buttons-list-button'>Test</button>
            </div>
          </div>
          <div className='input__main-input'>
            <h3 className='input__main-input-title'>Value</h3>
            <div className='input__main-input-container'>
              {/* going to need the form here */}
            </div>
          </div>
        </div>
        <div className='input__crud'>
          <h3 className='input__crud-title'>Edit</h3>
          <div className='input__crud-buttons-list'>
            <button className='input__crud-buttons-list-button'>Create</button>
            <button className='input__crud-buttons-list-button'>Delete</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashboardPage;
