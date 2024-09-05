<script>

    /** @type {import('./$types').PageData}*/
    export let data;
    import { onMount } from 'svelte';
    
    let posts = data;
    let loading = false;
    let offset = 2;

    // Lazily load more posts for performance reasons. As the user continues scrolling, the page will load more posts on demand. 
    // When I add functionality to jump around from post to post, I'll need to implement loading from both directions.
    async function loadMore() {
        if (loading) {
            return;
        };
        loading = true;

        const response = await fetch(`/api/more-posts?offset=${offset}`);
        const newPosts = await response.json();

        if (newPosts && newPosts.post && newPosts.post.length > 0) {
            posts = mergePosts(posts,newPosts);
            offset = offset + 3;
        } else {
            console.log("we're out of posts lol");
        }

        loading = false;
    };

    // not great to be so specific with a function, but im the one writing here lol
    function mergePosts(obj1,obj2) {
        obj2.post.forEach((element) => obj1.post.push(element));
        return obj1;
    }

    onMount(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
                loadMore();
              }
            },
            { rootMargin: '100px' } // Adjust rootMargin if needed
        );

        const target = document.querySelector('#load-more-trigger');
        if (target !== null) {
            observer.observe(target);
        } else {
            console.error("The load-more-trigger element is not found.");
        }
    });

</script>

<body>
    <div class= "flex-row p-0.5 space-y-6">
        {#if posts && posts.post}
        {#each posts.post as post}
        <ul>
            <li class = "flex justify-center items-center p-10 mx-auto">{post.name}</li>
            {post.body}
        </ul>
        {/each}
        {:else}
        <p>No posts found??? Reload the page and see if that works lol</p>
        {/if}
    </div>
    <div id="load-more-trigger" style="height: 1px;"></div>
</body>