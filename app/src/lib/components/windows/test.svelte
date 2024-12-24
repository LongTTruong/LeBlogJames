<script>
    // Props passed from the parent window manager
    export let title = "Default Title";
    export let content = "Default content for this window.";
</script>

<div class="type-a-window">
    <header>
        <h2>{title}</h2>
    </header>
    <main>
        <p>{content}</p>
    </main>
</div>

<style>
    .type-a-window {
        border: 2px solid #3498db;
        border-radius: 8px;
        background-color: #f0f8ff;
        padding: 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .type-a-window header {
        background-color: #3498db;
        color: white;
        padding: 0.5rem;
        border-radius: 6px 6px 0 0;
        font-size: 1.2rem;
    }
    .type-a-window main {
        padding: 0.5rem;
        font-size: 1rem;
        color: #333;
    }
</style>