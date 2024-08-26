<script>
    import "../lib/app.css";
</script>

<nav class = "bg-black p-4">
    <div class ="container mx-auto flex justify-between items-center">
        <a href="/" class="text-green-normal">Busting nuts</a>
        <div class="space-x-4">
            <a href="/" class="text-green-normal hover:bg-blue-700 px-3 py-2 rounded">Home</a>
            <a href="/design" class="text-green-normal hover:bg-blue-700 px-3 py-2 rounded">Design</a>
        </div>
    </div>
</nav>

<slot></slot>

<footer class="bg-black p-4">
    <div class="container mx-auto text-green-normal text-center">
        <p>© 2000 This guy stinks</p>
    </div>
</footer>