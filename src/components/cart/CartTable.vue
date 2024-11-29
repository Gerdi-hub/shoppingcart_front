<template>
  <div>
    <table class="table table-hover">
      <thead class="table-light">
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Price</th>
        <th class="text-end">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in cartItems" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ formatCurrency(item.price) }}</td>
        <td class="text-end">
          <button @click="$emit('remove-product', item.name)" class="btn btn-outline-secondary rounded-pill">
            Remove
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["cartItems"],
  methods: {
    formatCurrency(amount) {
      return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
    },
  },
};
</script>

<style scoped>
/* Scoped styles for the table */
</style>
