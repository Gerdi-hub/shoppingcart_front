<template>
  <div>
    <div class="d-flex justify-content-between">
      <h4>Total:</h4>
      <h4>{{ formatCurrency(cartTotal) }}</h4>
    </div>

    <div class="d-flex justify-content-between border-bottom py-3">
      <h4>Tax:</h4>
      <h4>{{ formatCurrency(cartTax) }}</h4>
    </div>

    <div class="d-flex justify-content-between py-3">
      <h3>Total with tax:</h3>
      <h3 class="text-center">{{ formatCurrency(cartFullTotal) }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cartTotal", "cartTax", "cartFullTotal"],
  methods: {
    formatCurrency(amount) {
      return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
    },
  },
};
</script>

<style scoped>
/* Scoped styles for the summary */
</style>
