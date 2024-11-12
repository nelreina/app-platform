<script>
    let {data} = $props();
    let posts = data.posts;
</script>


<h1>Posts</h1>



{#each posts as post}
    <div class="mt-4" >
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>
{/each}