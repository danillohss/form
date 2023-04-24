<template>
  <div>
    <i
      v-for="star in stars"
      :key="star.id"
      :class="star.style"
      @click="avaliation(star.id)"
    ></i>
  </div>
</template>

<script>
export default {
  name: "InputStars",
  props: {
    numberStars: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    stars: [],
    avaliationStar: null,
  }),
  methods: {
    startStars() {
      for (let i = 0; i < this.numberStars; i++) {
        this.stars[i] = { id: i, style: "bi-star star" };
      }
    },
    avaliation(e) {
      this.startStars();
      e++;
      for (let i = 0; i < e; i++) {
        this.stars[i].style = "bi-star-fill star-selected";
      }
      this.avaliationStar = e;
      //Emitindo evento e passando atributo para o componente(Formulario) que está instanciando esse componente (InputStars)
      this.$emit("avaliation", this.avaliationStar);
    },
  },
  created() {
    this.startStars();
  },
};
</script>

<style scoped>
.star {
  font-size: 1.5rem;
  color: #999;
  margin-left: 5px;
  margin-right: 5px;
}
.star-selected {
  font-size: 1.5rem;
  color: #dfe213;
  margin-left: 5px;
  margin-right: 5px;
}
</style>