 <template>

  <div class="c-form-text-item" v-bind:class="{ 'has-danger': data.error }">
    <label v-on:click="changed" class="c-switch" data-at="change_password_switch">
      <input
        v-model="element"
        ref="element"
        type="checkbox"
				v-bind:checked="data.checked"
        v-bind:class="{ 'is-not-empty': is_not_empty }"
        v-on:keyup="changed"
        v-bind:name="data.name"
				v-bind:value="data.value"
				true-value="true"
				false-value="false"
        class="c-switch__input"
      >
      <span class="c-switch__handle"></span>
      <span class="c-switch__text" v-if="data.label">{{ data.label }}</span>
      <span v-if="data.error" class="c-form-text-item__info">
        <span>{{ data.error }}</span>
        <i class="material-icons c-form-text-item__info-icon">warning</i>
      </span>
    </label>
  </div>

</template>

<script>
  export default {
    props: ['data'],
    data() {
      return {
        element: null,
        is_not_empty: false,
      }
    },
    methods: {
      changed() {
      	// I have no idea why element is reversed
				this.data.checked = this.element && this.element === 'true' ? false : true;
        this.is_not_empty = this.data.value && this.data.value.length > 0;
        this.$emit( "value", { name: this.data.name, value: this.element });
        if(this.data.changed) {
					this.data.changed(this.data.checked);
				}
      }
    },
    mounted() {
      if(this.data.focus) {
        this.$refs.element.focus();
      }

      /*if(this.data.value) {
        this.element = this.data.value;
      }*/

      this.is_not_empty = this.data.value.length > 0;
    }
  }
</script>
