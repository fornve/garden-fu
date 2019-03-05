 <template>

  <div class="c-form-text-item" v-bind:class="{ 'has-danger': data.error }">
    <input
      v-model="element"
      type="password"
      class="c-form-text-item__field is-not-empty"
      v-on:keyup="changed"
    >
    <label class="c-form-text-item__label">{{ data.label }}</label>
    <div class="c-form-text-item__bar"></div>
    <span v-if="data.error" class="c-form-text-item__info">
      <span>{{ data.error }}</span>
      <i class="material-icons c-form-text-item__info-icon">warning</i>
    </span>
  </div>

</template>

<script>
  export default {
    props: ['data'],
    data() {
      return {
        element: null,
      }
    },
    methods: {
      changed(event) {
				this.data.value = event.target.value;
        this.$emit( "value", { name: this.data.name, value: this.data.value });
      }
    }
  }
</script>
