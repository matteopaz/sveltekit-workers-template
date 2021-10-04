<script lang="ts">
  import Counter from '$lib/Counter.svelte'
  console.log("Hello World");
</script>

<h1>Hello Svelte</h1>
<Counter />
<style lang="postcss">
  :global(body) {
    background-color: #e5e5e5;
    display: grid;
    place-items: center;
    min-height: 100vh;
  } 
  
  h1 {
      font-family: sans-serif;
      margin: 0 auto;
      font-size: 6rem;
      letter-spacing: 0.25rem;
      color: #ffa500;
      width: max-content;
  }
</style>
