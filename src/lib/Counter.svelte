<script lang="ts">
    import { spring } from 'svelte/motion';
    let count = 0;
    const displayed_count = spring();
    $: displayed_count.set(count)
    $: offset = mod($displayed_count, 1)
    const mod = (n, m) => ((n % m) + m) % m;
</script>


<div class="counter">
    <button on:click={() => count++}>+</button>
    <div class="numbers">
      <div class="number_1" style="transform: translateY({-100 + 100 * offset}%)">
       {Math.floor($displayed_count) + 1}
      </div>
      <div class="number_2" style="transform: translateY({100 * offset}%)">
        {Math.floor($displayed_count)}
      </div>    
    </div>
    <button on:click={() => count--}>-</button>
</div>

<style lang="postcss">
    .counter {
        font-family: sans-serif;

        display: flex;
        width: 40rem;
        margin: 10rem auto;
        height: 8rem;
        border: 2px solid;
        border-radius: 20px;
        overflow: hidden;
        * {
          flex-grow: 1;
        }
    }
    button {
        background-color: transparent;
        border: none;
        font-size: 4.5rem;
        font-weight: 300;
    }
    .numbers {
        position: relative;
    }
    .number_1, .number_2 {
        font-size: 4rem;
        width: 100%;
        height: 100%;
        position: absolute;
        text-align: center;
        line-height: 8rem;
    }
</style>