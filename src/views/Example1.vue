<template>
  <div>
    <form @submit.prevent="doLogin">
      <div>
        <label for="login">Login</label>
        <input
          id="login"
          placeholder="login"
          type="text"
          v-model="formData.login"
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          id="password"
          placeholder="password"
          type="password"
          v-model="formData.password"
        />
      </div>
      <div>
        <div />
        <button type="submit">Login</button>
      </div>
      <div>
        <div />
        <div :class="{ 'error-msg': errorMsg, 'success-msg': successMsg }">
          {{ errorMsg }}
          {{ successMsg }}
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Example1",
  data() {
    return {
      errorMsg: "",
      successMsg: "",
      formData: {},
    };
  },
  methods: {
    doLogin(e) {
      if (
        this.formData.login === "login" &&
        this.formData.password === "password"
      ) {
        this.successMsg = "Login Succeed";
        this.errorMsg = "";
        this.formData = {};
      } else {
        this.errorMsg = "Login Failed";
        this.successMsg = "";
        this.formData = {};
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ form {
  background-color: gray;
  padding: 20px;
  border-radius: 20px;
  & > div {
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin-bottom: 10px;
  }
  .error-msg {
    color: red;
    text-align: center;
  }

  .success-msg {
    color: green;
    text-align: center;
  }
}
</style>
