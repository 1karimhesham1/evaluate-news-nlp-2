// Importing JS files
import { checkForName } from './js/nameChecker';  // Import checkForName function
import { handleSubmit } from './js/formHandler';  // Import handleSubmit function

// Importing Sass files
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

// Exporting JS files so they can be used elsewhere if needed
export {
    checkForName,
    handleSubmit
};

// Debugging (remove this for production)
alert("I EXIST");
console.log("CHANGE!!");
