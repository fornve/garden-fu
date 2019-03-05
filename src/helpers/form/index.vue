<template>
  <v-form
      v-bind:class="[data.div_class,getStructure().root.div_class]"
    >
    <div v-if="alert" class="c-alert c-alert--danger" role="alert">
      <i class="material-icons c-alert__icon">warning</i>
      <div class="c-alert__text">{{ alert }}</div>
    </div>

    <div
      :key="row.id"
      v-for="row in getStructure().root.rows"
      v-bind:class="row.div_class"
    >
      <div
        :key="row_element.id"
        v-for="row_element in row.elements"
        v-bind:class="row_element.div_class"
      >
        <div
          :key="field.id"
          v-for="field in data.fields"
          v-bind:class="field.name"
        >
          <input-text
            v-bind:class="field.div_class"
            v-if="field.type == 'text' && field.name == row_element.field"
            :data="field"
            @value="changedFieldValue"
          ></input-text>
          <input-password
            v-bind:class="field.div_class"
            v-if="field.type == 'password' && field.name == row_element.field"
            :data="field"
            @value="changedFieldValue"
          ></input-password>
          <input-textarea
            v-bind:class="field.div_class"
            v-if="field.type == 'textarea' && field.name == row_element.field"
            :data="field"
            @value="changedFieldValue"
          ></input-textarea>
          <input-checkbox
            v-bind:class="field.div_class"
            v-if="field.type == 'checkbox' && field.name == row_element.field"
            :data="field"
            @value="changedFieldValue"
          ></input-checkbox>

          <v-btn
            v-on:click="process"
            v-if="field.type == 'button' && field.name == row_element.field"
            >{{ field.text }}</v-btn>

        </div>
      </div>
    </div>

  </v-form>
</template>

<script>
import InputText from "../form/input-text";
import InputCheckbox from "../form/input-checkbox";
import InputPassword from "../form/input-password";
import InputTextarea from "../form/textarea";

export default {
	components: {
		"input-text": InputText,
		"input-checkbox": InputCheckbox,
		"input-password": InputPassword,
		"input-textarea": InputTextarea,
	},
	props: ["data"],
	data() {
		return {
			alert: false,
			fields: {},
			errors: {},
			checkErrors: false
		};
	},
	methods: {
		changedFieldValue(data) {
			this.alert = false;
			this.fields[data.name] = data.value;
			this.validateField(data.name);
		},
		getFieldConfig(name) {
			let data;
			this.data.fields.forEach((field) => {
				if(field.name === name) {
					data = field;
				}
			});
			return data;
		},
		getFieldValue(name) {
			let value = false;
			this.data.fields.forEach((field) => {
				if(field.name === name) {
					value = field.value;
				}
			});
			return value;
		},
		fixAutocomplete(name) {
			console.log(this.fields[name]);
		},
		emitFieldError(name, error) {
			this.data.fields.forEach((field) => {
				if(field.name === name) {
					field.error = error;
				}
			});
		},
		hasErrors() {
			let errors = false;

			Object.keys(this.errors).forEach((key) => {
			  let error = this.errors[key]
				if(error) {
					errors = true;
				}
			});
			return errors;
		},
		resetFieldError(name) {
			this.data.fields.forEach((field) => {
				if(field.name === name && field.error) {
					field.error = null;
				}
			});
		},
		validateField(field_name, validations) {
			if(!this.checkErrors) {
				return false;
			}

			if(!validations) {
				validations = this.data.validate;
			}

      if(!validations) {
        return;
      }

			let _base = this;
			Object.keys(validations).forEach((name) => {
			  let validation = validations[name]
		// It has to be split into a helper or function
        Object.keys(validation).forEach((type) => {
          // Skip not required fields if field_name is provided
					if(field_name && field_name !== name) {
						return;
					}

					_base.fixAutocomplete(name);
					let data = _base.getFieldConfig(name);
					let value = _base.getFieldValue(name);
					let email_regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
					if(type === "email") {
						if(!value || !email_regex.test(value) ) {
							_base.errors[name+":"+type] = true;
							_base.emitFieldError(name, data.label +" should be valid email address.");
						} else {
							_base.errors[name+":"+type] = false;
							_base.resetFieldError(name);
						}
					} else if(type === "minLength") {
						if(!value || value.length < validation[type]) {
							_base.errors[name+":"+type] = true;
							_base.emitFieldError(name, data.label +" should be at least "+ validation[type] +" caracters long.");
						} else {
							_base.errors[name+":"+type] = false;
							_base.resetFieldError(name);
						}
					} else if(type === "required") {
						if(!value || value.length < 1) {
							_base.errors[name+":"+type] = true;
							_base.emitFieldError(name, data.label +" is required.");
						} else {
							_base.errors[name+":"+type] = false;
							_base.resetFieldError(name);
						}
					} else if(type === 'match') {
						if(_base.getFieldValue(validation[type]) !== value) {
							_base.emitFieldError(name, _base.getFieldConfig(validation[type]).label + " does not match.");
							_base.errors[name + ":" + type] = true;
							_base.errors[validation[type] + ":" + type] = true;
						} else {
							_base.errors[name + ":" + type] = false;
							_base.errors[validation[type] + ":" + type] = false;
						}
					} /*else if(type === 'dependOn') {
						console.log('Depending on '+name)
						validation.forEach((field_validations, name) => {
							console.log('Depend on '+ name)
							console.log(field_validations);
							_base.validateField(name, field_validations);
						});
					} else if(type === 'function') {
					}*/
				});
			});
		},
		getStructure() {
			return this.data.structure ? this.data.structure : this.default_structure;
		},
		validate () {
			this.checkErrors = true;

			this.validateField();

			if(!this.hasErrors()) {
				this.submit();
			}
		},
		process() {
			this.validate();
		},
		submit() {
			let _base = this;
			this.data.submit(this.fields, function(error) {
				console.log("form received error "+ error);
				_base.alert = error;
			});
		}
	},
	created() {
		this.default_structure = {
			root: {
				rows: {
					first_row: {
						elements: {
						}
					}
				}
			}
		};

		this.data.fields.forEach(field => {
			this.default_structure.root.rows.first_row.elements[field.name] = {
				field: field.name
			};
		});

	}
};
</script>
