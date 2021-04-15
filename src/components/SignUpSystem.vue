<template>
  <div class="bg-gradient-to-r from-lavender to-rose h-screen">
    <h1 class="text-4xl text-center">{{ msg }}</h1>
    <form @submit.prevent="regisForm">
      <div class="flex justify-center mt-6">
        <div class="text-center">
          <div class="grid grid-cols-2 gap-4 ">
            <div class="format">
              <label for="firstname" class="text-sm text-gray-600"
                >First Name</label>
              <input
                type="text"
                id="firstname"
                v-model="firstname"
                class="regis"
                :class="{ 'bg-red-50': FirstnameInput }"
              />
              <p v-if="FirstnameInput" class="text-red-500">
                Please enter your firstname!
              </p>
            </div>
            <div class="format">
              <label for="lastname" class="text-sm text-gray-600"
                >Last Name</label>
              <input
                type="text"
                id="lastname"
                v-model="lastname"
                class="regis"
                :class="{ 'bg-red-50': LastnameInput }"
              />
               <p v-if="LastnameInput" class="text-red-500">
                Please enter your lastname!
              </p>
            </div>
            <div class="format">
              <label for="email" class="text-sm text-gray-600">Email</label>
              <input
                type="text"
                id="email"
                v-model="email"
                class="regis"
                :class="{ 'bg-red-50': EmailInput }"
              />
             <p v-if="EmailInput" class="text-red-500">
                Please enter your email!
              </p>
            </div>
            <div class="format">
              <label for="username" class="text-sm text-gray-600">Username</label>
              <input
                type="text"
                id="username"
                v-model="username"
                class="regis"
                :class="{ 'bg-red-50': UsernameInput }"
              />
              <p v-if="UsernameInput" class="text-red-500">
                Please enter your username!
              </p>
            </div>
            <div class="format">
              <label for="birth" class="text-sm text-gray-600">Birthday</label>
              <input
                type="date"
                id="birth"
                v-model="birth"
                class="regis"
                :class="{ 'bg-red-50': BirthInput }"
              />
              <p v-if="BirthInput" class="text-red-500">
                Please enter your birthday!
              </p>
            </div>
            <div class="format">
              <label for="genders" class="text-sm text-gray-600">Gender</label>
              <input
                id="genders"
                v-model="genders"
                class="regis"
                :class="{ 'bg-red-50': GenderInput }"
                />
              <p v-if="GenderInput" class="text-red-500">
                Please enter your gender!
              </p>
            </div>
            </div>
            <div>
              <button class="px-9 py-2.5 bg-black rounded-lg text-white mt-3 hover:bg-pink-500">Sign Up</button>
            </div>
            <ul v-for="regis in regisDetail" :key="regis.id">
              <li class="mt-3">
                <span class="text-red-500 font-bold text-lg ">{{ regis.username }}</span> 
                <p class="text-gray-600"> have successfully registered! <br>
                If you want to edit or delete your data. Please cilck.. <br></p>
                <div class="flex justify-center">
                <div class="mr-3">
                <button @click="showRegis(regis)" class="px-11 py-2.5 bg-mango-default rounded-lg text-white mt-3">
                  Edit</button>
                </div>  
                <button @click="deleteRegis(regis.id)" class="px-9 py-2.5 bg-red-400 rounded-lg text-white mt-3">
                  Delete</button>
                </div>
              </li>
            </ul>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUpSystem",
  props: {
    msg: String,
  },
  data() {
    return {
          url: "http://localhost:5000/regisDetail",
          edit: false,
          editId: "",
          firstname: "",
          lastname: "",
          genders: "",
          email: "",
          username: "",
          birth: null,
          FirstnameInput: false,
          LastnameInput: false,
          EmailInput: false,
          UsernameInput: false,
          BirthInput: false,
          GenderInput: false,
          regisDetail: []
        };
  },
  methods: {
    regisForm() {
      this.FirstnameInput = this.firstname === "" ? true : false;
      this.LastnameInput = this.lastname === "" ? true : false;
      this.EmailInput = this.email === "" ? true : false;
      this.UsernameInput = this.username === "" ? true : false;
      this.BirthInput = this.birth === null ? true : false;
      this.GenderInput = this.genders === "" ? true : false;

      if(this.firstname !== "" && this.lastname !== "" && this.email !== "" &&
        this.username !== "" && this.birth !== null && this.genders !== "") {
          if(this.edit) {
            this.editRegis({
              id: this.editId,
              firstname: this.firstname,
              lastname: this.lastname,
              email: this.email,
              username: this.username,
              birth: this.birth,
              genders: this.genders
            });
          }else{
            this.addRegis({
              firstname: this.firstname,
              lastname: this.lastname,
              email: this.email,
              username: this.username,
              birth: this.birth,
              genders: this.genders
            });
          }
        }
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.username = "";
        this.birth = null;
        this.genders = "";
    },
    async getRegisDetail() {
      try {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
      } catch(error) {
        console.log(`Could not confirm. ${error}`);
      }
    },
    async addRegis(newRegis) {
      try {
        const res = await fetch(this.url,{
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            firstname: newRegis.firstname,
            lastname: newRegis.lastname,
            email: newRegis.email,
            username: newRegis.username,
            birth: newRegis.birth,
            genders: newRegis.genders
          }),
        });
        const data = await res.json();
        this.regisDetail = [...this.regisDetail, data];
      } catch(error) {
        console.log(`Could not confirm. ${error}`);
      }
    },
     async created() {
      this.regisDetail = await this.getRegisDetail();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding-top: 20pt;
  font-weight: bold;
}
</style>
