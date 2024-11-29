<template>
  <div>
    <h3 class="mb-4 text-muted">Add Product</h3>
    <form @submit.prevent="handleSubmit" class="input-group mb-4">
      <input v-model="localProduct.name" class="form-control" type="text" placeholder="Product Name" required />
      <input v-model="localProduct.price" class="form-control" type="number" placeholder="Price" required />
      <input v-model="localProduct.quantity" class="form-control" type="number" placeholder="Quantity" required />
      <button type="submit" class="btn btn-outline-primary rounded-pill">Add Product</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["newProduct"],
  data() {
    return {
      localProduct: { ...this.newProduct }, // Create a local copy of the prop
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("update-product", { ...this.localProduct }); // Emit updated product to parent
      this.localProduct = { name: "", price: "", quantity: "" }; // Reset local copy
    },
  },
};
</script>
