<script>
    import "../lib/app.css";
</script>

<nav class = "p-4">
    <div class ="container mx-auto flex justify-between items-center">
        <a href="/" class="hover:bg-blue-700 px-3 py-2 rounded">Busting nuts</a>
        <div class="space-x-4">
            <a href="/design" class="hover:bg-blue-700 px-3 py-2 rounded">Design</a>
            <a href="/blog" class = "hover:bg-blue-700 px-3 py-2 rounded">Prose</a>
        </div>
    </div>
</nav>

<slot></slot>

    <footer class = "p-4">
    <div class="container mx-auto text-center">
        <p>© 2000 This guy stinks</p>
    </div>
</footer>