<script>
    let items = [
        { id: 1, name: 'Item 1', description: 'Description 1' },
        { id: 2, name: 'Item 2', description: 'Description 2' },
        { id: 3, name: 'Item 3', description: 'Description 3' }
    ];
  export let data;
</script>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        {#each items as item}
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
            </tr>
        {/each}
    </tbody>
</table>