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
                class="detail"
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
                class="detail"
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
                class="detail"
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
                class="detail"
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
                name="birth"
                id="birth"
                v-model="birth"
                class="detail"
                :class="{ 'bg-red-50': BirthInput }"
              />
              <p v-if="BirthInput" class="text-red-500">
                Please enter your birthday!
              </p>
            </div>
            <div class="format">
              <p class="text-sm text-gray-600">Gender</p>
              <div class="flex flex-row justify-center py-3" >
              
              <div class="mr-3">
              <input
                type="radio"
                name="genders"
                id="genders-male"
                value="male"
                v-model="genders"
                />
              <label for="genders-male" class="ml-2 text-sm text-gray-600">Male</label>
              </div>

              <div class="ml-3">
              <input
                type="radio"
                name="genders"
                id="genders-female"
                value="female"
                v-model="genders"
                />
                <label for="genders-female" class="ml-2 text-sm text-gray-600">Female</label>
              </div>

              </div>
              <p v-if="GenderInput" class="text-red-500 mt-2">
                Please choose your gender!
              </p>
            </div>
            </div>
            <div>
              <button class="px-9 py-2.5 bg-black rounded-lg text-white mt-3 hover:bg-pink-500">Sign Up</button>
            </div>
        </div>
      </div>
    </form>
            <ul>
              <li class="mt-3" v-for="regis in regisDetail" :key="regis.id">
                <p class="text-red-500 font-bold text-lg text-center">{{ regis.username }}</p> 
                <p class="text-gray-600 text-center"> have successfully registered! <br>
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
          genders: null,
          email: "",
          username: "",
          birth: null,
          FirstnameInput: false,
          LastnameInput: false,
          EmailInput: false,
          UsernameInput: false,
          BirthInput: false,
          GenderInput: false,
          regisDetail: [],
          regisItem: [],
        };
  },
  methods: {
    regisForm() {
      this.FirstnameInput = this.firstname === "" ? true : false;
      this.LastnameInput = this.lastname === "" ? true : false;
      this.EmailInput = this.email === "" ? true : false;
      this.UsernameInput = this.username === "" ? true : false;
      this.BirthInput = this.birth === null ? true : false;
      this.GenderInput = this.genders === null ? true : false;

      if(!this.FirstnameInput && !this.LastnameInput && !this.EmailInput &&
        !this.UsernameInput && !this.BirthInput && !this.GenderInput) {
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
        this.genders = null;
    }, 
    async getRegisItem(itemId) {
      try {
        this.regisItem = [];
        const res = await fetch(`${this.url}/${itemId}`);
        const data = await res.json();
        this.regisItem.push(data);
        if(!this.edit){
          this.edit = true
          this.editId = data.id
          this.firstname = data.firstname
          this.lastname = data.lastname
          this.email = data.email
          this.username = data.username
          this.birth = data.birth
          this.genders = data.genders
        }
          return this.regisItem;
      } catch(error) {
        console.log(`Could not confirm. ${error}`);
      }
    },
    async addRegis(newRegis) {
      try {
        const res = await fetch(this.url, {
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
    showRegis(oldRegis) {
      this.edit = true;
      this.editId = oldRegis.id;
      this.firstname = oldRegis.firstname;
      this.lastname = oldRegis.lastname;
      this.email = oldRegis.email;
      this.username = oldRegis.username;
      this.birth = oldRegis.birth;
      this.genders = oldRegis.genders;
    },
    async editRegis(changeDetail) {
      try {
        const res = await fetch(`${this.url}/${changeDetail.id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          firstname: changeDetail.firstname,
          lastname: changeDetail.lastname,
          email: changeDetail.email,
          username: changeDetail.username,
          birth: changeDetail.birth,
          genders: changeDetail.genders
        })
      })
      const data = await res.json()
      this.regisDetail = this.regisDetail.map((regis) => 
      regis.id === changeDetail.id ? {...regis, firstname: data.firstname, 
      lastname: data.lastname, email: data.email, username: data.username,
      birth: data.birth, genders: data.genders} : regis)
      this.edit = false
      this.editId = ""
      this.firstname = ""
      this.lastname = ""
      this.email = ""
      this.username = ""
      this.birth = null
      this.genders = null
      } catch(error) {
        console.log(`Could not confirm. ${error}`);
      }
    },
    async deleteRegis(deleteId) {
      try {
        await fetch(`${this.url}/${deleteId}`, {
          method: "DELETE",
        })
        this.regisDetail = this.regisDetail.filter((regis) => regis.id !== deleteId);
      } catch(error) {
        console.log(`Could not confirm. ${error}`);
      }
    }
  },
  async created() {
      this.regisDetail = await this.getRegisDetail();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding-top: 20pt;
  font-weight: bold;
}
</style>
