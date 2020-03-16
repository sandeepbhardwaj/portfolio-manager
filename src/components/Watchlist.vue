<template>
  <div>
    <b-table
      :data="data"
      :columns="columns"
      draggable
      @dragstart="dragstart"
      @drop="drop"
      @dragover="dragover"
      @dragleave="dragleave">
    </b-table>
  </div> 
</template>

<script>
  export default {
      data() {
          return {
              data: [
                  
              ],
              columns: [
                  {
                      field: 'Symbol',
                      label: 'Symbol', 
                  },
                  {
                      field: 'current_price',
                      label: 'current_price',
                  }
              ],
              draggingRow: null,
              draggingRowIndex: null
          }
      },
      methods: {
        dragstart (payload) {
          this.draggingRow = payload.row
          this.draggingRowIndex = payload.index
          payload.event.dataTransfer.effectAllowed = 'copy'
        },
        dragover(payload) {
          payload.event.dataTransfer.dropEffect = 'copy'
          payload.event.target.closest('tr').classList.add('is-selected')
          payload.event.preventDefault()
        },
        dragleave(payload) {
          payload.event.target.closest('tr').classList.remove('is-selected')
          payload.event.preventDefault()
        },
        drop(payload) {
          payload.event.target.closest('tr').classList.remove('is-selected')
          const droppedOnRowIndex = payload.index
          this.$buefy.toast.open(`Moved ${this.draggingRow.first_name} from row ${this.draggingRowIndex + 1} to ${droppedOnRowIndex + 1}`)
        }
      }
  }
</script>