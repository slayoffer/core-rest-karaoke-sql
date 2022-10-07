const URL = 'http://localhost:7777/entries/entry';

const $entriesContainer = document.querySelector('.entries');

const removeEntry = async (e) => {
  if (e.target.tagName === 'BUTTON') {
    const $deleteBtn = e.target;
    const $entry = $deleteBtn.parentElement.parentElement.parentElement;
    const entryID = $entry.dataset.id;

    const options = {
      method: 'DELETE',
    };

    const response = await fetch(`${URL}/${entryID}`, options);

    if (response.ok) {
      $entry.remove();
    }
  }
};

$entriesContainer.addEventListener('click', removeEntry);
