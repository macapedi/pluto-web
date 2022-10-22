import "./DashboardPage.scss";
import * as pluto from 'plutolib';
import 'axios';

// function makeContainer(){

// }

// function makeH1(name, direction, align, color){
//   pluto.container()
// }
function updateCode(){
  const htmlRaw = document.querySelector('.preview-container__html');
  const codeContainer = document.querySelector('.code-container__code');
  codeContainer.innerText = htmlRaw.outerHTML;
}

function DashboardPage() {
  // pluto.container('test','horizontal', 'center', 'blue');
  // pluto.h1('test h1', 'test', 'testh1', 'black');
  return (
    <div className="dashboard">
      <h1>This is Dashboard Page</h1>
      <section className='main'>
        <div className='code-container'>
          <h2 className='code-container__title'>Code of the Site</h2>
          <div className='code-container__code'>

          </div>
        </div>
        <div className='preview-container'>
          <h2 className='preview-container__title'>Preview of the Site</h2>
          <div id="preview-container__html--id" className='preview-container__html'>

          </div>
        </div>

      </section>
      <section className='input'>
        <div className='input__main'>

























          <form>
            <div className='input__main-buttons'>
              <h3 className='input__main-title'>Pick a Component</h3>
              <div className='input__main-buttons-list'>


                {/* Title */}
                <button type='submit' className='input__main-buttons-list-button'
                  onClick={(e) => {
                    e.preventDefault();
                    updateCode();
                    pluto.h1(e.target.form.input.value, 'preview-container__html--id', 'title', 'black');
                  }}>Title</button>


                {/* NavBar */}
                <button className='input__main-buttons-list-button'>Navbar</button>

                {/* Subtitle */}
                <button type='submit' className='input__main-buttons-list-button' onClick={(e) => {
                    e.preventDefault();
                    updateCode();
                    pluto.h3(e.target.form.input.value, 'preview-container__html--id', 'title', 'black');
                  }}>Subtitle</button>

                {/* Link */}
                <button className='input__main-buttons-list-button' onClick={(e) => {
                  e.preventDefault(e);
                  updateCode();
                  pluto.link(e.target.form.input.value, e.target.form.url.value, 'link to google.com', '16', 'link', 'preview-container__html--id');
                }}>Link</button>



                <br></br>
                {/* Container */}
                <button className='input__main-buttons-list-button'>Container</button>

                {/* Image */}
                <button type='submit' className='input__main-buttons-list-button' onClick={(e) => {
                    e.preventDefault();
                    updateCode();
                    pluto.image(e.target.form.imgurl.value, e.target.form.imgwidth.value, 'image', e.target.form.imgaria.value, 'preview-container__html--id');
                  }}>Image</button>

                {/* Form */}
                <button className='input__main-buttons-list-button'>Form</button>

                {/* Paragraph */}
                <button type="submit" className='input__main-buttons-list-button' onClick={(e) => {
                    e.preventDefault();
                    updateCode();
                    pluto.p(e.target.form.input.value, 'preview-container__html--id', 'title', 'black');
                  }}>Paragraph</button>
              </div>
            </div>
            <div className='input__main-input'>
              <h3 className='input__main-input-title'>Value</h3>
              <div className='input__main-input-container'>
                <label htmlFor='input'>Text</label>
                <input type='text' id='input' name='input' ></input>

                <label htmlFor='url'>Link URL</label>
                <input type='text' id='url' name='url'></input>

                <label htmlFor='url'>Image URL</label>
                <input type='text' id='imgurl' name='imgurl'></input>

                <label htmlFor='url'>Image Width</label>
                <input type='text' id='imgwidth' name='imgwidth'></input>

                <label htmlFor='url'>Image Aria-Label</label>
                <input type='text' id='imgaria' name='imgaria'></input>
              </div>
            </div>
          </form>

















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
