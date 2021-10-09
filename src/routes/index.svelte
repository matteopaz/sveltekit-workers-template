<script lang="ts">
  import Counter from '$lib/Counter.svelte'
  import src from '/svelte.png';
</script>

<main>
  <img {src} alt="Svelte Logo!">
  <div class="content">
    <h1>Hello Svelte</h1>
    <Counter />
  </div>
</main>

<style lang="postcss">
  :global(body) {
    background-color: #e5e5e5;
  } 
  
  main {
    position: relative;
    height: 100vh;
  }
  img {
    position: absolute;
    margin-top: auto;
    margin-bottom: 3.5rem;
    opacity: 0.2;
    z-index: -1;
    top: 0;
    bottom: 0;
    aspect-ratio: initial;
    height: 60%;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  .content {
    position: relative;
    z-index: 0;
    width: 30%;
    padding-top: 5rem;
    margin: 0 auto;
  }
  h1 {
      margin: 0;
      font-family: sans-serif;
      width: 100%;
      font-size: 6rem;
      letter-spacing: 0.25rem;
      color: #ffa500;
      text-align: center;
  }
</style>
