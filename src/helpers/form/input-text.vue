 <template>

  <div v-bind:class="{ 'has-danger': data.error }">
    <v-text-field
      ref="element"
      type="text"
      v-bind:class="{ 'is-not-empty': is_not_empty }"
      v-on:keyup="changed"
      v-bind:name="data.name"
      v-bind:value="data.value"
      v-bind:label="data.label"
    ></v-text-field>

    <span v-if="data.error">
      <span>{{ data.error }}</span>
      <v-icon>warning</v-icon>
    </span>
  </div>

</template>

<script>
  export default {
    props: ['data'],
    data() {
      return {
        element: null,
        is_not_empty: () => {
          return this.data.value && this.data.value.length ? true : false;
        },
      }
    },
    methods: {
      changed(event) {
        this.data.value = event.target.value;
        this.$emit( "value", { name: this.data.name, value: this.data.value });
      }
    },
    mounted() {
      if(this.data.focus) {
        this.$refs.element.focus();
      }

      if(this.data.value) {
        this.$refs.element.value = this.data.value;
      }
    }
  }
</script>
