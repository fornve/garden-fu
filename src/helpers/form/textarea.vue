 <template>

  <div class="c-form-text-item" v-bind:class="{ 'has-danger': data.error }">
    <textarea
      v-model="element"
      ref="element"
      class="c-form-text-item__field"
      v-on:keyup="changed"
    ></textarea>
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
      changed() {
        this.$emit( "value", { name: this.data.name, value: this.element });
      }
    },
    mounted() {
      if(this.data.focus) {
        this.$refs.element.focus();
      }
    }
  }
</script>
