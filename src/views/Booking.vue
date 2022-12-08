<template>
  <div class="booking">
    <h1 class="text-red-500 font-bold">Booking</h1>
    <div class="max-w-xs">
      <label for="wallet" class="block text-sm font-medium text-gray-700"
        >Тикер</label
      >
      <div class="mt-1 relative rounded-md shadow-md">
        <input
          v-model="ticker"
          @keydown.enter="add"
          type="text"
          name="wallet"
          id="wallet"
          class="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
          placeholder="Например DOGE"
        />
      </div>
    </div>
    <div
      v-for="t in tickers"
      :key="t.name"
      :class="{
        'border-4': sel === t
      }"
      class="bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer"
    >
      <div class="px-4 py-5 sm:p-6 text-center">
        <dt class="text-sm font-medium text-gray-500 truncate">
          {{ t.name }} - USD
        </dt>
        <dd class="mt-1 text-3xl font-semibold text-gray-900">
          {{ t.price }}
        </dd>
      </div>
    </div> 
  </div>
</template>

<script>
export default({
  name: "App",

  data() {
    return {
      ticker: "",
      tickers: ['aa', 'bb', 'cc'],
      sel: null,
      graph: []
    }
  },

  methods: {
    
  }
})
</script>

