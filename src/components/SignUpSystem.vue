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
              <label for="phone" class="text-sm text-gray-600">Phone</label>
              <input
                type="text"
                id="phone"
                v-model="phone"
                class="regis"
                :class="{ 'bg-red-50': PhoneInput }"
              />
              <p v-if="PhoneInput" class="text-red-500">
                Please enter your phone!
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
              <button class="px-9 py-2.5 bg-black rounded-lg text-white mt-3 hover:bg-pink-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Sign Up</button>
            </div>
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
          firstname: "",
          lastname: "",
          genders: "",
          email: "",
          phone: "",
          birth: null,
          FirstnameInput: false,
          LastnameInput: false,
          EmailInput: false,
          PhoneInput: false,
          BirthInput: false,
          GenderInput: false,
          regisDetail: []
        };
  },
  methods: {
    regisForm() {
      this.FirstnameInput = this.firstname == "" ? true : false;
      this.LastnameInput = this.lastname == "" ? true : false;
      this.EmailInput = this.email == "" ? true : false;
      this.PhoneInput = this.phone == "" ? true : false;
      this.BirthInput = this.birth == null ? true : false;
      this.GenderInput = this.genders == "" ? true : false;


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
