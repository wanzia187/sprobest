<script>
  // import { env } from "$env/dynamic/private";

  export let access_key = "";
</script>

<form action="https://api.staticforms.xyz/submit" method="post">
  <div class="input-group">
    <input type="text" class="input-field" placeholder=" " name="name" />
    <label for="name" class="input-label">Your Name</label>
  </div>

  <div class="input-group">
    <input type="text" class="input-field" placeholder=" " name="email" />
    <label for="email" class="input-label">Your Email</label>
  </div>

  <div class="input-group">
    <input type="text" class="input-field" placeholder=" " name="subject" />
    <label for="subject" class="input-label">Subject</label>
  </div>

  <textarea
    id="message"
    placeholder="Type your message here..."
    name="message"
    rows="4"
    cols="50"
  />
  <input class="submit-button" type="submit" value="Send" />

  <input type="hidden" name="accessKey" value={access_key} />

  <input type="hidden" name="replyTo" value="@" />
  <!-- <input type="hidden" name="redirectTo" value="/" /> -->
</form>

<style>
  form {
    display: inline;
    /* position: fixed; */
    display: grid;
    width: 100%;
    gap: 0.5rem;
    top: 2rem;
    padding: 2rem 1rem;
    padding-top: 5rem;
    /* border: var(--debug); */
  }

  #message {
    font-size: var(--normal-font-size);
    border: 1px solid var(--sprobest-dark-secondary-bg);
    border-radius: 0.5rem;
    outline: none;
    padding: 1rem;
    background: none;
    min-height: 20rem;
    /* background: var(--sprobest-dark-bg); */
  }

  .input-group {
    position: relative;
    height: 48px;
    margin-bottom: 1.5rem;
  }

  .input-field {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: var(--normal-font-size);
    border: 1px solid var(--sprobest-dark-secondary-bg);
    border-radius: 0.5rem;
    outline: none;
    padding: 1rem;
    background: none;
    z-index: 1;
  }

  .input-label {
    position: absolute;
    left: 1rem;
    top: 1rem;
    padding: 0 0.25rem;
    background-color: var(--sprobest-dark-secondary-bg);
    color: var(--input-color);
    font-size: var(--normal-font-size);
    transition: 0.3s;
    z-index: 9999;
    /* border: var(--debug); */
  }

  .submit-button {
    display: block;
    margin-right: auto;
    padding: 0.75rem 2rem;
    outline: none;
    border: none;
    background-color: var(--sprobest-dark-secondary-bg);
    color: var(--sprobest-dark-text);
    font-size: var(--normal-font-size);
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.3s;
  }

  .submit-button:hover {
    box-shadow: 0 10px 36px rgba(0, 0, 0, 0.5);
  }

  /* Move label up on input focus */

  .input-field:focus + .input-label,
  .input-field:not(:placeholder-shown).input-field:not(:focus) + .input-label {
    top: -0.5rem;
    left: 0.8rem;
    color: var(--sprobest-dark-text);
    font-size: var(--small-font-size);
    font-weight: 500;
    z-index: 10;
    background-color: var(--sprobest-dark-bg);
    /* border: var(--debug); */
  }

  /* Border color change on input focus */
  .input-field:focus {
    border: 1.5px solid var(--sprobest-dark-text);
  }

  #message:focus {
    border: 1.5px solid var(--sprobest-dark-text);
  }
</style>
