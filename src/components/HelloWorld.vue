<template>
<div  class="h-screen w-screen mx-auto ">
         <div class="border py-10 bg-dark">
        <h1 class="text-4xl  text-sky  text-center ">{{ msg }}</h1>
        </div>

        <div class=" flex transform hover:scale-110  ">
            <img class="pl-20 py-10 cursor-pointer " src="..\assets\pic1.jpg">
            <div class="border-2 md:border-t-1  mt-10 mb-10">
                <p class="text-xl pt-6 pl-5 pr-8 tracking-tight hover:underline cursor-pointer ">Beyond LIVE - SUPER
                    JUNIOR 15th Anniversary Special<br />Event – 초대(Invitation)</p>
                <p class="text-sm pt-1 pl-5 text-gray-400 tracking-tight">03.11.2020 - 07.11.2020</p>
                <p class="text-xs pt-2 pl-5">11/7 (SAT) 17:00 (KST) Welcome to online-fanmeeting of SuperJunior's
                    15th<br />anniversary!</p>
            </div>
        </div>

        <div class="flex transform hover:scale-110  ">
            <img class="pl-20 mb-20 mt-0 cursor-pointer " src="..\assets\pic2.jpg">
            <div class="border-2 md:border-t-1  mt-0 mb-20">
                <p class="text-xl pt-6 pl-5 pr-8 tracking-tight hover:underline cursor-pointer">Heart 4 U - CHANYEOL
                    Membership!</p>
                <p class="text-sm pt-1 pl-5 text-gray-400 tracking-tight">06.10.2020 - 25.12.2020</p>
                <p class="text-xs pt-4 pl-5 pr-14 ">เข้าร่วม 'Heart 4 U - CHANYEOL' MEMBERSHIP ตอนนี้
                    แล้วพบกับตอนหลักล่วงหน้าสอง<br />สัปดาห์!</p>
            </div>
        </div>

    </div>
    
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    margin-top: 10pt;
    font-weight: bold; 
}
</style>
