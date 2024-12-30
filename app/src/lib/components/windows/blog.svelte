<script>
import TerminalOverlay from '$lib/components/TerminalOverlay.svelte';
export let title = "Default Title";
export let content = "Default content for this window.";

</script>
<!-- this component contains the styling for the blog "application" that will be applied to its own specific
 window component. -->
<div class ="type-a-window">
    <header>
        <h2>{title}</h2>
    </header>
    <main>
        <TerminalOverlay/>
        <p>{content}</p>
    </main>
</div>

