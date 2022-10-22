import "./DashboardPage.scss";
import * as pluto from 'plutolib';
import 'axios';


function updateCode() {
  const htmlRaw = document.querySelector('.preview-container__html');
  const codeContainer = document.querySelector('.code-container__code');
  codeContainer.innerText = htmlRaw.outerHTML;
}

function DashboardPage() {

  const collapseHandler = (e) => {
    e.preventDefault();
    const content = document.querySelector('.input');
    const displaysContainer = document.querySelector('.main');

    content.classList.toggle('hide_flex');
    displaysContainer.classList.toggle('display_height');
  }
  return (
    <main>
      <div className="dashboard">
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
        <button type="button" className="collapsible" onClick={(e) => { collapseHandler(e) }}>Collapse</button>

        <section className='input'>
          <div className='input__main'>


            <form className='input-form'>
              <div className='input__main-input'>
                <h3 className='input__main-input-title title'>1. Enter a Value</h3>
                <div className='input__main-input-container'>
                  <label htmlFor='input'>Text</label>
                  <input type='text' id='input' name='input' ></input>

                  <label htmlFor='url'>Link URL</label>
                  <input type='text' id='url' name='url'></input>

                  <label htmlFor='imgurl'>Image URL</label>
                  <input type='text' id='imgurl' name='imgurl'></input>

                  <label htmlFor='imgwidth'>Image Width</label>
                  <input type='text' id='imgwidth' name='imgwidth'></input>

                  <label htmlFor='imgaria'>Image Aria-Label</label>
                  <input type='text' id='imgaria' name='imgaria'></input>

                  <label htmlFor='navbar'>Enter comma seperated items...</label>
                  <input type='text' id='navbar' name='navbar'></input>

                  <label htmlFor='color'>Color</label>
                  <input type='text' id='color' name='color'></input>
                </div>
              </div>
              <div className='input__main-buttons'>
                <h3 className='input__main-title title'>2. Pick a Component</h3>
                <div className='input__main-buttons-list'>


                  {/* Title */}
                  <button type='submit' className='input__main-buttons-list-button'
                    onClick={(e) => {
                      e.preventDefault();
                      pluto.h1(e.target.form.input.value, 'preview-container__html--id', 'title', (e.target.form.color.value ? e.target.form.color.value: 'black'));
                      updateCode();
                    }}>Title</button>


                  {/* NavBar */}
                  <button type="submit" className='input__main-buttons-list-button' onClick={(e) => {
                    e.preventDefault();
                    const optionsString = e.target.form.navbar.value;
                    const optionsArr = optionsString.split(',');
                    console.log(optionsArr);

                    let navbarObj = {};

                    for (let i = 0; i < optionsArr.length; i++) {

                      navbarObj[i + 'label'] = optionsArr[i];
                    }

                    console.log(navbarObj);

                    pluto.navbar(navbarObj, e.target.form.imgurl.value, e.target.form.color.value
                      , 'preview-container__html--id');
                    updateCode();

                  }}>Navbar</button>

                  {/* Subtitle */}
                  <button type='submit' className='input__main-buttons-list-button' onClick={(e) => {
                    e.preventDefault();
                    pluto.h3(e.target.form.input.value, 'preview-container__html--id', 'title', (e.target.form.color.value ? e.target.form.color.value: 'black'));
                    updateCode();
                  }}>Subtitle</button>

                  {/* Link */}
                  <button className='input__main-buttons-list-button' onClick={(e) => {
                    e.preventDefault(e);
                    pluto.link(e.target.form.input.value, e.target.form.url.value, 'link to google.com', '16', 'link', 'preview-container__html--id');
                    updateCode();
                  }}>Link</button>

                  <br></br>
                  {/* Container */}
                  <button className='input__main-buttons-list-button'>Container</button>

                  {/* Image */}
                  <button type='submit' className='input__main-buttons-list-button' onClick={(e) => {
                    e.preventDefault();
                    pluto.image(e.target.form.imgurl.value, e.target.form.imgwidth.value, 'image', e.target.form.imgaria.value, 'preview-container__html--id');
                    updateCode();
                  }}>Image</button>

                  {/* Form */}
                  <button type="submit" className='input__main-buttons-list-button' onSubmit={(e) => {
                    e.preventDefault();
                    const optionsString = e.target.form.navbar.value;
                    const optionsArr = optionsString.split(',');

                    pluto.form(optionsArr, 'preview-container__html--id');
                    updateCode();
                  }}>Form</button>


                  {/* Paragraph */}
                  <button type="submit" className='input__main-buttons-list-button' onClick={(e) => {
                    e.preventDefault();
                    pluto.p(e.target.form.input.value, 'preview-container__html--id', 'title', (e.target.form.color.value ? e.target.form.color.value: 'black'));
                    updateCode();
                  }}>Paragraph</button>
                </div>
              </div>

            </form>


          </div>
          <div className='input__crud'>
            <h3 className='input__crud-title title'>3. Edit</h3>
            <div className='input__crud-buttons-list'>
              <button className='input__crud-buttons-list-button'>Create</button>
              <button className='input__crud-buttons-list-button'>Delete</button>
            </div>
          </div>
        </section>
      </div>
    </main>

  );
}

export default DashboardPage;