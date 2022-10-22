import "./DocumentationPage.scss";
import Footer from "../../components/Footer/Footer";

function DocumentationPage() {
  return (
    <>
      <div className="documentation">
        <h1 className="documentation__title">Documentation page</h1>
        <div className="documentation__container">
          <p>The website works with the Pluto Library. You can find it at <a href="https://www.npmjs.com/package/plutolib">NPM.</a></p>
          <p>To use it directly to your code you can run "npm install plutolib"</p>

          <p>Potential Inputs:</p>
          <p>
            {" "}
            Name (string) - each element requires a unique name to be identified
            in the document <span>Direction (string) - expects either: “start” or
            “center” or “end”. Will direct the content in that container in that
            direction.</span><span> Align (string) - expects either: “row” or “column”. Will
            align the items in that direction.</span> Color (string) - sets the
            background color of the container. labelNames (Array) - expects an
            array of strings for each input in the form. Container (string) -
            expects the name of the container you wish to add the component to.
            Text (string) - expects a string of what you want the component to
            say. Src (string) - expects a url of the location of the photo you
            wish to add. Width (int) - expects a width in pixels of the image
            you wish to add. *the height is automatically adjusted from the
            width* Aria (string) - expects a description of the component to
            explain more detailed what the component is for screen readers. Href
            (string) - expects a url that you wish to link the component to.
            Items (Array) - expects an array of strings of the items you wish to
            be in the list fontSize (int) - expects an integer of the size of
            pixel you want the font size to be
          </p>
          <p>
            Components with their respective inputs IN ORDER. The order is
            necessary for the program to work correctly. Container (name,
            direction, align, color) Form (labelNames, container) h1 (text,
            container, name, color) h2 (text, container, name, color) h3 (text,
            container, name, color) p (text, container, name, color) image(src,
            width, name, aria, container) link(text, href, aria, fontSize, name,
            container) ul(items, color, font, container)
          </p>
          <h3>Using the GUI</h3>
          <p>In case you don't want to use the library directly to your React code, you can use our intuitive GUI</p>
          <p>The way it works is pretty simple, you start adding components you need to build the basic markup and even some basic CSS styles</p>
          <p>As you add new elements, you can look at the code it generates in the left screen and how the website will actually looks like in the right screen.</p>
          <p>Happy learning and happy coding!</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DocumentationPage;
