<template>
  <div class="container">
    <div class="row">
      <div class="col-6 bg-light">
        <span class="fs-4">ENTRADA DE DADOS</span>
        <hr />
        <!-- <form @submit.prevent="submit($event)"> -->
        <form @reset="resetar()">
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Nome:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model.lazy="form.name"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">E-mail:</label>
            <div class="col">
              <input
                type="email"
                class="form-control"
                v-model.lazy="form.email"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Senha:</label>
            <div class="col">
              <input
                type="password"
                class="form-control"
                v-model.lazy="form.password"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Idade:</label>
            <div class="col">
              <input
                type="number"
                class="form-control"
                v-model.lazy="form.age"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Gênero:</label>
            <div class="col">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  value="feminino"
                  v-model="form.sexo"
                />
                <label class="form-check-label"> Feminino </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  value="masculino"
                  v-model="form.sexo"
                />
                <label class="form-check-label"> Masculino </label>
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-3 col-form-label">Licença:</label>
            <div class="col">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="form.license"
                  true-value="SIM"
                  false-value="NÃO"
                />
                <label class="form-check-label">Li e aceito os termos</label>
              </div>
            </div>
          </div>

          <div class="mb-3 row">
            <label class="col-3 col-form-label">Interesses:</label>
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="JavaScript"
                  v-model="form.interest"
                />
                <label class="form-check-label"> JavaScriot </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Vue.Js"
                  v-model="form.interest"
                />
                <label class="form-check-label"> VueJS </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Angular"
                  v-model="form.interest"
                />
                <label class="form-check-label"> Angular </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="NodeJS"
                  v-model="form.interest"
                />
                <label class="form-check-label"> NodeJS </label>
              </div>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Telefone:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.phone"
                v-maska="'(##) #####-####'"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">CEP:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.cep"
                v-maska="'#####-###'"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">CPF:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.cpf"
                v-maska="'###.###.###-##'"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">CNPJ:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.cnpj"
                v-maska="'##.###.###/####-##'"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Cartão de crédito:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.creditCard"
                v-maska="'#### #### #### ###'"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Placa:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.licensePlate"
                v-maska="'AAA-####'"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Placa Mercosul:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.licensePlate"
                v-maska="'AAA#A###'"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">RG:</label>
            <div class="col">
              <input
                type="text"
                class="form-control"
                v-model="form.rg"
                v-maska="'#*-X'"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Data:</label>
            <div class="col">
              <input type="date" class="form-control" v-model="form.date" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Data/hora local:</label>
            <div class="col">
              <input
                type="datetime-local"
                class="form-control"
                v-model="form.dateHourLocal"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Mês:</label>
            <div class="col">
              <input type="month" class="form-control" v-model="form.month" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Semana:</label>
            <div class="col">
              <input type="week" class="form-control" v-model="form.week" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Hora:</label>
            <div class="col">
              <input type="time" class="form-control" v-model="form.hour" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Cor:</label>
            <div class="col">
              <input type="color" class="form-color" v-model="form.color" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Valor limite:</label>
            <div class="col">
              <input
                type="range"
                class="form-range"
                min="0"
                max="100"
                step="1"
                v-model="form.range"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Escondido:</label>
            <div class="col">
              <input type="hidden" class="form-control" v-model="form.hidden" />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Upload:</label>
            <div class="col">
              <input
                type="file"
                class="form-control"
                multiple
                @change="selectFile($event)"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Descrição:</label>
            <div class="col">
              <textarea
                class="form-control"
                rows="3"
                v-model.lazy="form.description"
              ></textarea>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Cursos:</label>
            <div class="col">
              <select class="form-select" v-model="form.selectedCourse">
                <option v-for="(course, index) in courses" :key="index">
                  {{ course.course }}
                </option>
              </select>
            </div>
          </div>
          <div class="mb-3 row">
            <label class="col-3 col-form-label">Avaliação</label>
            <InputStars
              :numberStars="5"
              @avaliation="form.avaliation = $event"
            />
            <div></div>
          </div>
          <hr />
          <div class="mb-3 row">
            <div class="col d-flex justify-content-between">
              <button class="btn btn-secondary" type="reset">Limpar</button>
              <button class="btn btn-success" type="button">
                Enviar (btn)
              </button>
              <button class="btn btn-success" type="submit">
                Enviar (submit)
              </button>
            </div>
          </div>
        </form>
      </div>

      <!-- DEBUG -->
      <div
        class="col-6 text-white bg-secondary"
        :style="`background-color:${form.color}!important`"
      >
        <span class="fs-4">ESTADO DO OBJETO</span>
        <hr />
        {{ form }}
        <div class="mb-5 row">
          <span>Estado do objeto</span>
        </div>

        <span class="fs-4">SAÍDA DE DADOS</span>
        <hr />
        <div class="mb-3 row">
          <span>Nome: {{ form.name }}</span>
        </div>
        <div class="mb-3 row">
          <span>E-mail: {{ form.email }}</span>
        </div>
        <div class="mb-3 row">
          <span>Senha: {{ form.password }}</span>
        </div>
        <div class="mb-3 row">
          <span>Idade: {{ form.age }}</span>
        </div>
        <div class="mb-3 row">
          <span>Gênero: {{ form.sexo }}</span>
        </div>
        <div class="mb-3 row">
          <span>Licença: {{ form.license }}</span>
        </div>
        <div class="mb-3 row">
          <span>Interesses:</span>
          <ul>
            <li v-for="(interests, index) in form.interest" :key="index">
              {{ interests }}
            </li>
          </ul>
        </div>
        <div class="mb-3 row">
          <span>Telefone:</span>
        </div>
        <div class="mb-3 row">
          <span>CPF: {{ form.cpf }}</span>
        </div>
        <div class="mb-3 row">
          <span>CEP: {{ form.cep }}</span>
        </div>
        <div class="mb-3 row">
          <span>CNPJ: {{ form.cnpj }}</span>
        </div>
        <div class="mb-3 row">
          <span>Cartão de Crédito: {{ form.creditCard }}</span>
        </div>
        <div class="mb-3 row">
          <span>Placa veiculo: {{ form.licensePlate }}</span>
        </div>
        <div class="mb-3 row">
          <span
            >Data: {{ form.date }} ||
            {{ $moment(form.date).format("DD/MM/YYYY") }}</span
          >
        </div>
        <div class="mb-3 row">
          <span>Data/hora local: {{ form.dateHourLocal }}</span>
          <ul>
            <li>
              {{ $moment(form.dateHourLocal).locale("pt-br").format("dddd") }}
            </li>
          </ul>
        </div>
        <div class="mb-3 row">
          <span>Mês:{{ form.month }}</span>
        </div>
        <div class="mb-3 row">
          <span>Semana:{{ form.week }}</span>
        </div>
        <div class="mb-3 row">
          <span>Hora:{{ form.hour }}</span>
        </div>
        <div class="mb-3 row">
          <span>Cor:{{ form.color }}</span>
        </div>
        <div class="mb-3 row">
          <span>Valor limite: {{ form.range }}</span>
        </div>
        <div class="mb-3 row">
          <span>Escondido: {{ form.hidden }}</span>
        </div>
        <div class="mb-3 row">
          <span>Descrição:</span>
          <div style="white-space: pre">{{ form.description }}</div>
        </div>
        <div class="mb-3 row">
          <span>Estrelas do curso: {{ form.avaliation }}</span>
        </div>
        <div class="mb-3 row">
          <span>Curso:</span>
          <div style="white-space: pre">{{ form.selectedCourse }}</div>
        </div>
        <div class="mb-3 row">
          <span>Upload:</span>
          <ul>
            <li v-for="(file, index) in form.files" :key="index">
              {{ file.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputStars from "./InputStars.vue";
export default {
  // eslint-disable-next-line
  name: "Formulario",
  components: { InputStars },
  data() {
    return {
      courses: [
        { id: 1, course: "Banco de dados SQL" },
        { id: 2, course: "JavaScript" },
        { id: 3, course: "PHP" },
        { id: 4, course: "NodeJs" },
      ],
      form: {
        password: "",
        name: "",
        email: "",
        age: " ",
        license: "NÃO",
        interest: [],
        sexo: "",
        phone: "",
        cep: "",
        cpf: "",
        cnpj: "",
        creditCard: "",
        licensePlate: "",
        rg: "",
        date: "",
        dateHourLocal: "",
        month: "",
        week: "",
        hour: "",
        color: "#6c757d",
        range: 5,
        hidden: "Input oculto",
        files: {},
        description: "",
        selectedCourse: "",
        avaliation: "",
      },
    };
  },
  methods: {
    selectFile(event) {
      this.form.files = event.target.files;
    },
    resetar() {
      this.form = {};
    },
  },
};
</script>
