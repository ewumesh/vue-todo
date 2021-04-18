<template>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <div class="row">
        <div class="col-md-12">
          <form v-on:submit.prevent="addList()">
            <input
              v-model="listName"
              class="form-control"
              type="text"
              placeholder="Enter list name"
            />
            <button
              :disabled="listName == ''"
              class="btn btn-primary mt-4"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>

      <h3 class="mt-4 pt-4">List {{ name }}</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in items" :key="i.id">
            <th><input type="checkbox" aria-label="Checkbox" /></th>
            <td>
              <span class="badge badge-primary badge-pill">{{ i.id }}</span>
            </td>
            <td>{{ i.name }}</td>
            <td>
              <button
                @click="editList(i.id)"
                class="btn btn-primary btn-xs btn-sm mr-1"
                type="button"
              >
                <i class="fa fa-edit"></i>
              </button>
              <button
                @click="deleteLists(i.id)"
                class="btn btn-danger btn-xs btn-sm ml-1"
                type="button"
              >
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <h4
        v-if="items.length < 1"
        class="text-center"
        style="color: rgb(94, 94, 94);"
      >
        Data not found!!!
      </h4>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listName: '',
      items: [
        { id: 1, name: 'Umesh Thapa', isActive: true },
        { id: 2, name: 'Ramesh Adhikari', isActive: true }
      ]
    }
  },
  methods: {
    addList () {
      // eslint-disable-next-line no-undef
      setTimeout(() => {
        this.items.push({
          id: this.items.length + 1,
          name: this.listName,
          isActive: true
        })
        this.listName = ''
      }, 200)
    },
    deleteLists (id) {
      const index = this.items.findIndex(_ => _.id === id)
      this.items.splice(index, 1)
    },

    editList (id) {
      const data = this.items.find(_ => _.id === id)
      this.listName = data.name
    }
  }
}
</script>

<style scoped></style>
