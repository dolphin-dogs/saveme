<script lang="ts">
  export let data;
</script>

<div class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">Work Requests</h1>

  {#if data.work_requests.length === 0}
    <p>Aucune demande de travail trouvée.</p>
  {:else}
    <div class="grid gap-4">
      {#each data.work_requests as request}
        <div class="p-4 border rounded shadow">
          <pre>{JSON.stringify(request, null, 2)}</pre>
        </div>
      {/each}
    </div>
  {/if}
</div>
