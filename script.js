
  const scriptURL = 'https://script.google.com/macros/s/AKfycbygsw3mxUM8TVr4nYGdjcCgOod9Pvu_Ze1if4UJko-SdNITpwluvsL7BmUKVZjFMpg5/exec'
  const form = document.forms['right-form']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
      form.reset();
  })
