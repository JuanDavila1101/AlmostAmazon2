import signOut from '../../helpers/auth/signOut';

const logoutButton = () => {
  const domString = `<button id="google-auth" class="btn btn-danger ml-2">
    <i class="fas fa-sign-out-alt logout"></i><br>
    Log Out</button>`;
  document.querySelector('#logout-button').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

export default logoutButton;
