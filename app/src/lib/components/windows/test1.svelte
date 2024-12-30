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
