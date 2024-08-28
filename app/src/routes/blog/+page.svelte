<script>
    /** @type {import('./$types').PageData}*/
    export let data;
</script>

<body>
    <div class = "flex-row p-0.5 space-y-6">
    {#if data && data.post}
        {#each data.post as post}
        <u1>
            <li class = "flex justify-center items-center p-10 mx-auto">{post.name}</li>
            {post.body}
        </u1>
        {/each}
    {:else}
        <p>No posts found.</p>
    {/if}
    </div>
    
</body>