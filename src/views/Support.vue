<template>
  <div class="booking w-full h-full flex flex-col items-center px-40 py-10 gap-10">
    <div class="w-full h-16 flex gap-10 justify-between">
      <div class="w-1/3 bg-orange-500 text-white rounded-lg font-bold flex items-center justify-center"><p class="text-center">АКТИВНЫЕ</p></div>
      <div class="w-1/3 bg-orange-500 text-white rounded-lg font-bold flex items-center justify-center"><p class="text-center">В ПРОЦЕССЕ</p></div>
      <div class="w-1/3 bg-orange-500 text-white rounded-lg font-bold flex items-center justify-center"><p class="text-center">ОБРАБОТАННЫЕ</p></div>
    </div>
    <div class="w-full h-max flex gap-10 justify-between">
      <div class="w-1/3 h-full flex flex-col gap-5">
        <div class="bg-gray-50 rounded-lg border-2 border-gray-800 w-full h-max p-5 gap-5 flex flex-col" v-for="t in active" :key="t">
          <div class="w-full flex gap-5 justify-between">
            <p class="font-semibold">{{ t.id }}</p>
            <p class="font-semibold">{{ t.problem }}</p>
          </div>
          <div class="w-full flex gap-5">
            <p class="italic">{{ t.text }}</p>
          </div>
          <div class="w-full h-max text-right">
            <p class="hover:text-red-500 font-bold hover:cursor-pointer w-full align-bottom" @click="deleteMessage(t)">X</p>
          </div>
        </div>
      </div>
      <div class="w-1/3 h-full flex flex-col gap-5">
        <div class="bg-gray-50 rounded-lg border-2 border-gray-800 w-full h-max p-5 gap-5 flex flex-col" v-for="t in progress" :key="t">
          <div class="w-full flex gap-5 justify-between">
            <p class="font-semibold">{{ t.id }}</p>
            <p class="font-semibold">{{ t.problem }}</p>
          </div>
          <div class="w-full flex gap-5">
            <p class="italic">{{ t.text }}</p>
          </div>
          <div class="w-full h-max text-right">
            <p class="hover:text-red-500 font-bold hover:cursor-pointer w-full align-bottom" @click="deleteMessage(t)">X</p>
          </div>
        </div>
      </div>
      <div class="w-1/3 h-full flex flex-col gap-5">
        <div class="bg-gray-50 rounded-lg border-2 border-gray-800 w-full h-max p-5 gap-5 flex flex-col" v-for="t in finished" :key="t">
          <div class="w-full flex gap-5 justify-between">
            <p class="font-semibold">{{ t.id }}</p>
            <p class="font-semibold">{{ t.problem }}</p>
          </div>
          <div class="w-full flex gap-5">
            <p class="italic">{{ t.text }}</p>
          </div>
          <div class="w-full h-max text-right">
            <p class="hover:text-red-500 font-bold hover:cursor-pointer w-full align-bottom" @click="deleteMessage(t)">X</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      active: [
        {id: 1, problem: "Проблема в отображении броней.", text: "Не могу посмотреть свои брони. Брони буквально не отображаются на моей основной странице. Даже пытался перезаходить в приложение."},
        {id: 2, problem: "Проблема в авторизации", text: "Не могу зайти в приложение, хотя раньше заходил. Почините, пожалуйста!"},
        {id: 3, problem: "Проблема в бронировании", text: "Не могу забронировать место в офисе. Почему-то не хочет выбираться время!"},
      ],
      progress: [
        {id: 4, problem: "Проблема в отображении броней", text: "Не могу посмотреть свои брони"}, 
        {id: 5, problem: "Проблема в авторизации", text: "Не могу зайти в приложение. Не могу зайти в приложение. Не могу зайти в приложение. Не могу зайти в приложение."}, 
        {id: 6, problem: "Проблема в бронировании", text: "Не могу забронировать место в офисе. Что-то пошло не так ):"}
      ],
      finished: [
        {id: 7, problem: "Проблема в отображении броней", text: "Не могу посмотреть свои брони. Ставлю 4 звезды из 5 возможных. Когда почините -- поставлю 5!"}, 
        {id: 8, problem: "Проблема в авторизации", text: "Не могу зайти в приложение"}, 
        {id: 9, problem: "Проблема в бронировании", text: "Не могу забронировать место в офисе"}
      ],
      sel: null,
    };
  },

  methods: {
    deleteMessage(id) {
      this.active = this.active.filter(message => message != id);
      this.progress = this.progress.filter(message => message != id);
      this.finished = this.finished.filter(message => message != id);
    }
  }
}
</script>